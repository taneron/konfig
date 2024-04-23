from django.urls import path
from .views import (
    chat_view,
    chatbox_view,
    create_chat_view,
    chat_select_view,
    create_organization_view,
    create_space_view,
    organization_select_view,
    space_select_view,
)

urlpatterns = [
    path("", chat_view, name="chat_view"),
    path("c/<str:chat_id>", chat_view, name="chat_view"),
    path("chatbox", chatbox_view, name="chatbox_view"),
    path("create_chat", create_chat_view, name="create_chat_view"),
    path("create_space", create_space_view, name="create_space_view"),
    path("create_organization", create_organization_view, name="create_organization_view"),
    path("chat_select", chat_select_view, name="chat_select_view"),
    path("space_select", space_select_view, name="space_select_view"),
    path("organization_select", organization_select_view, name="organization_select_view"),
]
