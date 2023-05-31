import typing_extensions

from python_rce.paths import PathValues
from python_rce.apis.paths.sessions_create import SessionsCreate
from python_rce.apis.paths.sessions_list import SessionsList
from python_rce.apis.paths.sessions_execute import SessionsExecute
from python_rce.apis.paths.sessions_close import SessionsClose

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SESSIONS_CREATE: SessionsCreate,
        PathValues.SESSIONS_LIST: SessionsList,
        PathValues.SESSIONS_EXECUTE: SessionsExecute,
        PathValues.SESSIONS_CLOSE: SessionsClose,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SESSIONS_CREATE: SessionsCreate,
        PathValues.SESSIONS_LIST: SessionsList,
        PathValues.SESSIONS_EXECUTE: SessionsExecute,
        PathValues.SESSIONS_CLOSE: SessionsClose,
    }
)
