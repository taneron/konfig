import json
from typing import Optional
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import uuid
from IPython.terminal.interactiveshell import TerminalInteractiveShell
from io import StringIO
import sys
from anyio.streams.file import FileWriteStream


app = FastAPI(servers=[{"url": "http://127.0.0.1:8000"}])
sessions: dict[str, TerminalInteractiveShell] = {}

class SessionCreateResponse(BaseModel):
    session_id: str

class SessionExecuteRequest(BaseModel):
    session_id: str
    code: str
    environment_variables: Optional[dict[str, str]]

class SessionCloseRequest(BaseModel):
    session_id: str

class SessionInfo(BaseModel):
    session_id: str

class SessionListResponse(BaseModel):
    sessions: list[SessionInfo]

class SessionCloseResponse(BaseModel):
    message: str

class ExecutionResult(BaseModel):
    result: str
    output: str
    error: str

class SessionNotFoundError(BaseModel):
    session_id: str
    error: str

# magic...
# https://stackoverflow.com/a/56434301
import nest_asyncio
nest_asyncio.apply()

@app.on_event("startup")
async def startup():
    async with await FileWriteStream.from_path("openapi.json") as stream:
        await stream.send(bytes(json.dumps(app.openapi(), indent=4).encode("utf-8")))

@app.post("/sessions/create", response_model=SessionCreateResponse, tags=["session"])
async def create_session():
    session_id = str(uuid.uuid4())
    shell = TerminalInteractiveShell()
    sessions[session_id] = shell
    return SessionCreateResponse(session_id=session_id)

@app.get("/sessions/list", response_model=SessionListResponse, tags=["session"])
async def list_sessions():
    session_list = [SessionInfo(session_id=session_id) for session_id in sessions]
    return SessionListResponse(sessions=session_list)

@app.post("/sessions/execute", response_model=ExecutionResult, responses={404: {"model": SessionNotFoundError}}, tags=["session"])
async def execute_code(request: SessionExecuteRequest):
    session_id = request.session_id
    code = request.code

    if session_id in sessions:

        shell = sessions[session_id]

        # Set any environment variables
        if request.environment_variables is not None:
            for name, value in request.environment_variables.items():
                shell.run_line_magic("set_env", "{} {}".format(name, value))

        # Create a custom output stream to capture print statements
        output_stream = StringIO()
        sys.stdout = output_stream

        try:

            # Execute the code
            exec_result = shell.run_cell(code)

            # Restore the original stdout and capture the output
            sys.stdout = sys.__stdout__
            output = output_stream.getvalue()

            execution_result = ExecutionResult(
                result="Code executed",
                output=output,
                error=str(exec_result.error_in_exec) if exec_result.error_in_exec else ""
            )
            return execution_result
        except Exception as e:
            # Restore the original stdout in case of error
            sys.stdout = sys.__stdout__

            execution_result = ExecutionResult(
                result="Error",
                output="",
                error=str(e)
            )
            return execution_result
    else:
        return JSONResponse(status_code=404, content={"error":"Session not found", "session_id": session_id})

@app.post("/sessions/close", response_model=SessionCloseResponse, responses={404: {"model": SessionNotFoundError}}, tags=["session"])
async def close_session(request: SessionCloseRequest):
    session_id = request.session_id

    if session_id in sessions:
        del sessions[session_id]
        return SessionCloseResponse(message="Session closed")
    else:
        raise HTTPException(status_code=404, detail=SessionNotFoundError(error="Session not found", session_id=session_id))
