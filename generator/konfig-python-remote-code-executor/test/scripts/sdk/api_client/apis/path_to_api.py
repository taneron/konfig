import typing_extensions

from api_client.paths import PathValues
from api_client.apis.paths.sessions_create import SessionsCreate
from api_client.apis.paths.sessions_list import SessionsList
from api_client.apis.paths.sessions_execute import SessionsExecute
from api_client.apis.paths.sessions_close import SessionsClose

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
