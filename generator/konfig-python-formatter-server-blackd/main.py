from fastapi import FastAPI, Request, Response
import httpx

app = FastAPI()

@app.get("/")
async def root():
    return "OK"

@app.get("/healthz")
async def healthz():
    return "OK"

@app.post("/")
async def proxy(request: Request):
    # Forward the request to the destination
    url = f"http://localhost:9090"
    headers = dict(request.headers)
    headers.pop("Host", None)  # Remove Host header to avoid errors
    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, data=await request.body())

    # Return the response from the destination to the client
    content = response.content
    return Response(content=content)