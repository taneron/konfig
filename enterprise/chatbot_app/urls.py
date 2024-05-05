from django.urls import path
from .views import (
    chat_view,
    create_organization_view,
    create_space_view,
    customer_configuration,
    organization_select_view,
    space_select_view,
    specific_chat_view,
)

urlpatterns = [
    path("", chat_view, name="chat_view"),
    path("c/<str:chat_id>", specific_chat_view, name="specific_chat_view"),
    path("create_space", create_space_view, name="create_space_view"),
    path(
        "create_organization", create_organization_view, name="create_organization_view"
    ),
    path("space_select", space_select_view, name="space_select_view"),
    path(
        "organization_select", organization_select_view, name="organization_select_view"
    ),
    path(
        "customer_configuration", customer_configuration, name="customer_configuration"
    ),
]
