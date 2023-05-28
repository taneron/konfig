import typing_extensions

from api_client.apis.tags import TagValues
from api_client.apis.tags.session_api import SessionApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.SESSION: SessionApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.SESSION: SessionApi,
    }
)
