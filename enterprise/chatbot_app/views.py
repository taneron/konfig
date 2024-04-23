from django.http import HttpRequest, HttpResponseBadRequest
from django.urls import reverse
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.db.models import QuerySet
from django.db import transaction
from typing import TypedDict
from .models import (
    CurrentUserOrganization,
    Membership,
    Message,
    Chat,
    CurrentUserSpace,
    Organization,
    Space,
)
import requests
import os


@login_required
def chat_view(request: HttpRequest):
    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space
    if request.method == "POST":
        user_message = request.POST.get("message")
        if user_message is None:
            return HttpResponseBadRequest("No message provided")

        # create a new chat
        chat = Chat.objects.create(space_id=current_space.pk)
        bot_message = get_ai_response(user_message)
        Message.objects.create(
            user_message=user_message, bot_message=bot_message, chat=chat
        )
        context_data = get_context_data(request, chat_id=str(chat.chat_id))
        response = render(request, "chat.html", context_data)
        response["HX-Push-Url"] = reverse(
            "specific_chat_view", kwargs={"chat_id": chat.chat_id}
        )
        return response

    context_data = get_context_data(request)
    return render(
        request,
        "chat.html",
        context_data,
    )


@login_required
def specific_chat_view(request: HttpRequest, chat_id: str):
    is_allowed = can_user_see_chat(request.user.pk, chat_id)
    if not is_allowed:
        return HttpResponseBadRequest("User is not allowed to see this chat")

    # if POST request, then send a message
    if request.method == "POST":
        user_message = request.POST.get("message")
        if user_message is None:
            return HttpResponseBadRequest("No message provided")
        chat = Chat.objects.get(chat_id=chat_id)
        bot_message = get_ai_response(user_message)
        Message.objects.create(
            user_message=user_message, bot_message=bot_message, chat=chat
        )
        messages = Message.objects.filter(chat=chat)
        return render(request, "chatbox.html", {"messages": messages})

    context_data = get_context_data(request, chat_id)
    return render(request, "chat.html", context_data)


def can_user_see_chat(user_id: int, chat_id: str) -> bool:
    return Chat.objects.filter(
        chat_id=chat_id, space__organization__memberships__user_id=user_id
    ).exists()


@login_required
def organization_select_view(request: HttpRequest):
    organization_id = request.GET.get("organization_id")

    # make sure user has membership to the organization
    if not Membership.objects.filter(
        user_id=request.user.pk, organization_id=organization_id
    ).exists():
        raise ValueError("User is not apart of the organization")

    # change current organization to the selected organization
    with transaction.atomic():
        CurrentUserOrganization.objects.filter(user_id=request.user.pk).delete()
        CurrentUserOrganization.objects.create(
            user_id=request.user.pk, organization_id=organization_id
        )

    context_data = get_context_data(request)
    return render(request, "_chat_container_inner.html", context_data)


@login_required
def create_organization_view(request: HttpRequest):
    organization = Organization.objects.create()

    # set the current organization to the newly created organization and add membership of role owner
    with transaction.atomic():
        CurrentUserOrganization.objects.filter(user_id=request.user.pk).delete()
        CurrentUserOrganization.objects.create(
            user_id=request.user.pk, organization_id=organization.pk
        )
        Membership.objects.create(
            user_id=request.user.pk, organization_id=organization.pk, role="owner"
        )

    context_data = get_context_data(request)
    return render(request, "_chat_container_inner.html", context_data)


@login_required
def create_space_view(request: HttpRequest):
    current_organization = CurrentUserOrganization.objects.get(
        user_id=request.user.pk
    ).organization
    space = Space.objects.create(organization_id=current_organization.pk)

    # set the current space to the newly created space
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=request.user.pk).delete()
        CurrentUserSpace.objects.create(user_id=request.user.pk, space_id=space.pk)

    context_data = get_context_data(request)
    return render(request, "_chat_container_inner.html", context_data)


@login_required
def space_select_view(request: HttpRequest):
    space_id = request.GET.get("space_id")
    space = Space.objects.get(id=space_id)

    # set the current space to the newly selected space
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=request.user.pk).delete()
        CurrentUserSpace.objects.create(user_id=request.user.pk, space_id=space.pk)

    context_data = get_context_data(request)
    return render(
        request,
        "_chat_container_inner.html",
        context_data,
    )


class ChatData(TypedDict):
    current_organization: Organization
    current_space: Space
    current_chat: Chat | None
    organizations: QuerySet[Organization]
    spaces: QuerySet[Space]
    chats: QuerySet[Chat]
    messages: QuerySet[Message] | None


def get_context_data(request: HttpRequest, chat_id: str | None = None) -> ChatData:
    user = request.user
    user_id = user.pk
    current_user_organization_edge = CurrentUserOrganization.objects.filter(
        user_id=user_id
    ).first()
    if not current_user_organization_edge:
        # get memberships and select the first one
        membership = Membership.objects.filter(user_id=user_id).first()
        if not membership:
            # create a new organization and membership
            current_organization = Organization.objects.create()
            membership = Membership.objects.create(
                user_id=user_id, organization_id=current_organization.pk
            )
        else:
            current_organization = membership.organization
    else:
        current_organization = current_user_organization_edge.organization

    memberships = Membership.objects.filter(user_id=user_id)
    organizations = Organization.objects.filter(memberships__in=memberships)

    # get spaces from current organization
    spaces = Space.objects.filter(organization=current_organization)

    current_user_space_edge = CurrentUserSpace.objects.filter(user_id=user_id).first()
    if not current_user_space_edge:
        # create a new space and current user space edge
        current_space = Space.objects.create(organization_id=current_organization.pk)
        current_user_space_edge = CurrentUserSpace.objects.create(
            user_id=user_id, space_id=current_space.pk
        )
    else:
        current_space = current_user_space_edge.space

    # if space is not apart of the current organization, set the current space to the first space of the current organization
    if current_space.organization.pk != current_organization.pk:
        current_space = Space.objects.filter(organization=current_organization).first()
        # create space for this org if it doesn't exist
        if not current_space:
            current_space = Space.objects.create(organization=current_organization)
    # modify CurrentUserSpace in this case. Delete existing one and create new one
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=user_id).delete()
        CurrentUserSpace.objects.create(user_id=user_id, space_id=current_space.pk)

    if chat_id:
        chat = Chat.objects.get(chat_id=chat_id)
        messages = Message.objects.filter(chat=chat)
    else:
        chat = None
        messages = None

    chats = Chat.objects.filter(space=current_space)

    return {
        "current_organization": current_organization,
        "current_space": current_space,
        "current_chat": chat,
        "organizations": organizations,
        "spaces": spaces,
        "chats": chats,
        "messages": messages,
    }


def get_ai_response(user_input: str) -> str:
    # Set up the API endpoint and headers
    endpoint = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {os.environ.get('OPENAI_API_KEY')}",
        "Content-Type": "application/json",
    }

    # Data payload
    messages = get_existing_messages()
    messages.append({"role": "user", "content": f"{user_input}"})
    data = {"model": "gpt-3.5-turbo", "messages": messages, "temperature": 0.7}
    response = requests.post(endpoint, headers=headers, json=data)
    response_data = response.json()
    print(f"{response_data = }")
    ai_message = response_data["choices"][0]["message"]["content"]
    return ai_message


def get_existing_messages() -> list:
    """
    Get all messages from the database and format them for the API.
    """
    formatted_messages = []

    for message in Message.objects.values("user_message", "bot_message"):
        formatted_messages.append({"role": "user", "content": message["user_message"]})
        formatted_messages.append(
            {"role": "assistant", "content": message["bot_message"]}
        )

    return formatted_messages
