from django.urls import path
from .views import (
    chat_view,
    chatbox_view,
    create_chat_view,
    chat_select_view,
)

urlpatterns = [
    path("", chat_view, name="chat_view"),
    path("chatbox", chatbox_view, name="chatbox_view"),
    path("create_chat", create_chat_view, name="create_chat_view"),
    path("chat_select", chat_select_view, name="chat_select_view"),
]
