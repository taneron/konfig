from django.http import HttpRequest, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.shortcuts import render
from .models import Message, Chat
import requests
import os


def chat_view(request: HttpRequest):
    chat = Chat.objects.first()
    if not chat:
        chat = Chat.objects.create()
    messages = Message.objects.filter(chat=chat)
    chats = Chat.objects.all().order_by("-created_at")
    return render(
        request,
        "chat.html",
        {"messages": messages, "current_chat": chat, "chats": chats},
    )


def chat_select_view(request: HttpRequest):
    chat_id = request.GET.get("chat_id")
    chat = Chat.objects.get(id=chat_id)
    chats = Chat.objects.all().order_by("-created_at")
    messages = Message.objects.filter(chat=chat)
    return render(
        request,
        "_chat_container_inner.html",
        {"chats": chats, "current_chat": chat, "messages": messages},
    )


def create_chat_view(request: HttpRequest):
    chats = Chat.objects.all().order_by("-created_at")
    chat = Chat.objects.create()
    messages = Message.objects.filter(chat=chat)
    return render(
        request,
        "_chat_container_inner.html",
        {"current_chat": chat, "messages": messages, "chats": chats},
    )


@require_POST
def chatbox_view(request: HttpRequest):
    user_message = request.POST.get("message")
    chat_id = request.POST.get("chat_id")
    if user_message is None:
        return HttpResponseBadRequest("No message provided")
    bot_message = get_ai_response(user_message)
    chat = Chat.objects.get(id=chat_id)
    Message.objects.create(
        user_message=user_message, bot_message=bot_message, chat=chat
    )
    messages = Message.objects.filter(chat=chat)
    return render(request, "chatbox.html", {"messages": messages})


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
