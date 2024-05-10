from django.urls import re_path

from . import consumers

websocket_urlpatterns = [
    re_path(
        r"ws/template/(?P<chat_id>[a-f0-9\-]+)/$", consumers.TemplateConsumer.as_asgi()
    ),
]
