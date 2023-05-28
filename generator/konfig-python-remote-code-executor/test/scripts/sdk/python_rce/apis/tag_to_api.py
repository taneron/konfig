import typing_extensions

from python_rce.apis.tags import TagValues
from python_rce.apis.tags.session_api import SessionApi

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
