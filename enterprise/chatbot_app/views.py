from django.http import HttpRequest, HttpResponse, HttpResponseBadRequest
from django.urls import reverse
from django.views.decorators.http import require_POST
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
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
import json
import requests
import os
import time


@require_http_methods(["POST"])
@login_required
def generate_onboarding_guide(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    if chat_id is None:
        raise ValueError("Chat id is not provided")
    time.sleep(3)
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data[
        "current_guide"
    ] = """# This is a generated onboarding guide
## API Interaction Steps
- **Step 1:** Authenticate using your API key.
- **Step 2:** Use the `POST /create` endpoint to create a new resource.
- **Step 3:** Retrieve the resource using `GET /resource/{id}`.
- **Step 4:** Update the resource with `PUT /resource/{id}`.
- **Step 5:** Monitor the resource status with `GET /resource/status/{id}`."""
    chat.save()
    context = get_context_data(request, chat_id=chat_id)
    return render(request, "_review_onboarding_guide_inner.html", context)


@require_http_methods(["GET"])
@login_required
def customer_configuration(request: HttpRequest):
    customer_id = request.GET.get("customer_id")
    if customer_id == "A":
        configurations = {
            "configurations": [
                {
                    "id": "A",
                    "name": "Customer A",
                },
            ]
        }
    elif customer_id == "B":
        configurations = {
            "configurations": [
                {
                    "id": "B",
                    "name": "Customer B",
                },
            ]
        }
    else:
        raise ValueError(f"Invalid customer_id: {customer_id}")

    return render(request, "customer_configurations.html", configurations)


@require_http_methods(["POST"])
@login_required
def save_topic(request: HttpRequest):
    topic = request.POST.get("topic")

    if topic is None:
        raise ValueError("Topic is not selected")

    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space
    chat = Chat.objects.create(space_id=current_space.pk, name=topic)
    chat.form_data["topic"] = topic
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Push-Url"] = reverse(
        "specific_chat_view", kwargs={"chat_id": chat.chat_id}
    )
    response["HX-Trigger-After-Settle"] = "search-docs"
    return response


@require_http_methods(["POST"])
@login_required
def select_language(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    language = request.POST.get("language")

    if language is None:
        raise ValueError("Language is not selected")

    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["language"] = language
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    response["HX-Trigger-After-Settle"] = "forms-complete"
    return response


@require_http_methods(["POST"])
@login_required
def search_relevant_documents(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    search = request.POST.get("search")
    documents = get_documents(filter=search)
    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["relevant_documents"] = documents
    chat.save()
    time.sleep(1)
    return render(
        request,
        "_select_relevant_docs_search_results.html",
        {"documents": documents, "current_chat": chat},
    )


@require_http_methods(["POST"])
@login_required
def search_customer(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    search = request.POST.get("search")
    customers = get_customers(filter=search)
    chat = Chat.objects.get(chat_id=chat_id)
    time.sleep(1)
    return render(
        request,
        "_customer_search_results.html",
        {"customers": customers, "current_chat": chat},
    )


@require_http_methods(["POST"])
@login_required
def select_customer(request: HttpRequest):
    chat_id = request.POST.get("chat_id")
    customer_id = request.POST.get("customer_id")
    if customer_id not in ["customer_a", "customer_b"]:
        raise ValueError(f"Invalid customer_id: {customer_id}")

    chat = Chat.objects.get(chat_id=chat_id)
    chat.form_data["customer"] = customer_id
    chat.save()
    context = get_context_data(request, chat_id=str(chat.chat_id))
    response = render(request, "chat_container.html", context)
    return response


@require_http_methods(["POST"])
@login_required
def save_onboarding_form(request: HttpRequest):
    customer_id = request.POST.get("customer_id")
    chat_id = request.POST.get("chat_id")
    current_space = CurrentUserSpace.objects.get(user_id=request.user.pk).space

    if customer_id == "A":
        form_data = {
            "customer": "A",
        }
    elif customer_id == "B":
        form_data = {
            "customer": "B",
        }
    else:
        raise ValueError(f"Invalid customer_id: {customer_id}")

    if chat_id is None:
        chat = Chat.objects.create(space_id=current_space.pk, form_data=form_data)
        context = get_context_data(request, chat_id=str(chat.chat_id))
        response = render(request, "chat_container.html", context)
        response["HX-Push-Url"] = reverse(
            "specific_chat_view", kwargs={"chat_id": chat.chat_id}
        )
        return response
    else:
        raise NotImplementedError("Not implemented")


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
        response = render(request, "chat_container.html", context_data)
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
        context_data = get_context_data(request, chat_id)
        return render(request, "chatbox.html", context_data)

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
    response = render(request, "chat_container.html", context_data)
    response["HX-Push-Url"] = reverse("chat_view")
    return response


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
    return render(request, "chat_container.html", context_data)


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
    return render(request, "chat_container.html", context_data)


@login_required
def space_select_view(request: HttpRequest):
    space_id = request.GET.get("space_id")
    space = Space.objects.get(id=space_id)

    # set the current space to the newly selected space
    with transaction.atomic():
        CurrentUserSpace.objects.filter(user_id=request.user.pk).delete()
        CurrentUserSpace.objects.create(user_id=request.user.pk, space_id=space.pk)

    context_data = get_context_data(request)
    response = render(
        request,
        "chat_container.html",
        context_data,
    )
    response["HX-Push-Url"] = reverse("chat_view")
    return response


class Customer(TypedDict):
    id: str
    name: str
    configuration: dict
    configuration_formatted: str


class Language(TypedDict):
    name: str


class Document(TypedDict):
    id: str
    name: str
    content: str


class ChatData(TypedDict):
    current_organization: Organization
    current_space: Space
    current_topic: str | None
    current_chat: Chat | None
    current_customer: str | None
    current_language: str | None
    current_guide: str | None
    organizations: QuerySet[Organization]
    customers: list[Customer]
    documents: list[Document] | None
    spaces: QuerySet[Space]
    chats: QuerySet[Chat]
    languages: list[Language]
    messages: QuerySet[Message] | None


def get_documents(filter: str | None = None) -> list[Document]:
    documents = []
    documents.append(
        {
            "id": "creating_a_journey",
            "name": "creating-a-journey.md",
            "content": """## Creating a Journey

Depending on the workflow that you configured in your application, the `Create
Journey Application` endpoint will expect a set of parameters. To know which parameters you need
to pass in, you can use the `Get Journey Parameters` endpoint.

The `Get Journey Parameters` response body will contain a JSON based on the following schema:

```yaml
type: object
properties:
  journey_token:
    type: string
  journey_version:
    type: string
  timestamp:
    type: integer
  data:
    type: array
    items:
      type: object
      properties:
        branch_name:
          type: string
        workflows:
          type: array
          items:
            type: object
            properties:
              workflow_name:
                type: string
              parameters:
                type: object
                properties:
                  required:
                    type: array
                    items:
                      type: object
                  optional:
                    type: array
                    items:
                      type: object
                  or:
                    type: array
                    items:
                      type: object
```

For example if the response from the `Get Journey Parameters` endpoint is:

```json
{
  "journey_token": "J-VCQoADBJxeHtmdAvFqoS",
  "journey_version": "1",
  "timestamp": 1632400000,
  "data": [
    {
      "branch_name": "branch1",
      "workflows": [
        {
          "workflow_name": "workflow1",
          "parameters": {
            "required": [
              {
                "gender": true,
                "addresses": {
                  "state": true
                }
              }
            ],
            "optional": [
              {
                "document_license": true
              }
            ],
            "or": []
          }
        }
      ]
    }
  ]
}
```

Then you will need to always pass the `required` parameters in the `Create
Journey Application` endpoint under the `entities.data` object. In the above
example, the `required` parameters are `gender` and `addresses.state`.
""",
        }
    )
    documents.append(
        {
            "id": "integrating_with_journeys",
            "name": "Integrating with Journeys",
            "content": """# Integration

Journeys are designed to provide a synchronous response to allow you to provide feedback, next steps, or a final decision to your users.

They are accompanied by Webhooks for processing asynchronous actions that require the user to leave and later return to the process, such as Manual Reviews, and for reliable and resilient processing of events into your system of record. For examples and definitions of each journey event, please see Journeys Events.

Create an Application via API
It's now time to create your Application by making a POST request to this endpoint:

developer.alloy.com
developer.alloy.com
Create Journey Application
The Sandbox URL starts with: https://sandbox.alloy.co
The Production URL starts with: https://api.alloy.co
""",
        }
    )
    documents.append(
        {
            "id": "rerunning_journey_applications",
            "name": "Rerunning Journey Applications",
            "content": """# Rerunning Journey Applications

In certain cases, you may want to rerun a particular Journey Application in order to retrieve an updated or corrected outcome; for example, if the application terminated in an error status due to a Journey misconfiguration, or if one of the data vendors in an underlying workflow fails to execute.

## Initiating a Rerun

You can initiate a rerun for a Journey Application either through the Application Queue dashboard or via the Rerun Journey Application endpoint. When a rerun is initiated, Alloy will generate a started_rerun_application event for the original Journey Application, which is sent via webhook and appended to the _embedded.events[] array in the API response:

```json
{
    "_embedded": {
        ...
        "events": [
            ...
            {
                "journey_application_event_token": "22752065",
                "journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7",
                "type": "started_rerun_application",
                "timestamp": 1691764389137,
                "entity_token": null,
                "entity_application_token": null,
                "rerun_journey_application_token": "JA-XnOSwyRTCqgrj6dNvCBw",
                "_embedded": {
                    "node": {
                        "id": null,
                        "name": null,
                        "type": null
                    }
                },
                "_links": {}
            }
        ],
    }
}
```
Linking Reruns back to Root and Previous Journey Applications
If a Journey Application is created via rerun, the API response will contain data about where the Journey Application originated from in the _embedded.rerun section:

```json
{
    ...
    "_embedded": {
        "rerun": {
            "initiated_by": "api",
            "previous_journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7",
            "root_external_group_id": "8331a098-4238-4e26-bbdf-9a5a103ce509",
            "root_journey_application_token": "JA-8amRtBU3M98EWa4Hq8j7"
        },
        ...
    }
}
```
If multiple reruns are initiated from the same Journey Application in a chain, the previous_ Journey Application fields will reference the source Journey Application from which the rerun directly originated from. The root_ Journey Application fields will always reference the first Journey Application in the chain, before any reruns were initiated. Similarly, the started_rerun_application webhook/event will be appended to both the previous and root Journey Applications.

If there's only one rerun in the chain, the previous and root Journey Application will be the same.
""",
        }
    )
    documents.append(
        {
            "id": "additional_functionality_in_journeys",
            "name": "Additional Functionality in Journeys",
            "content": """# Additional Functionality

Adding In Additional Entities: If you don't have all the entities you want to
include in your application up front, you can add the field
do-await-additional-entities : true to your payload to the initial POST request.
This will put the Journey into a state where the application will not enter
reconciliation conditions until you have told us you are done sending entities.

Call a Non-Active Version of Your Journey: If you want to make an API call to a
version of your Journey which is not currently set as the active version, you
can use the header alloy-journey-version, with the number of the version as the
value.
""",
        }
    )
    documents.append(
        {
            "id": "welcome_to_alloy",
            "name": "Welcome to Alloy",
            "content": """# Welcome to Alloy

Alloy is the Identity Decisioning Platform that helps banks and fintech companies automate their decisions for onboarding, transaction monitoring and credit underwriting.

Build together using the Alloy API

Our single-API platform connects you and other clients like Gemini, Marqeta and Ally Bank to multiple data sources that result in the ability to make better fraud, risk and compliance decisions.

Here, you'll find comprehensive guides and documentation to help you integrate with Alloy quickly and seamlessly.
""",
        }
    )
    return documents


def get_customers(
    filter: str | None = None, customer_id: str | None = None
) -> list[Customer]:
    customer_a_configuration = {
        "journey_token": "J-VCQoADBJxeHtmdAvFqoS",
        "journey_version": "1",
        "timestamp": 1632400000,
        "data": [
            {
                "branch_name": "branch1",
                "workflows": [
                    {
                        "workflow_name": "workflow1",
                        "parameters": {
                            "required": [
                                {
                                    "name_first": True,
                                    "name_last": True,
                                    "birth_date": True,
                                    "email_address": True,
                                }
                            ],
                            "optional": [{"name_middle": True}],
                            "or": [],
                        },
                    }
                ],
            }
        ],
    }
    customer_b_configuration = {
        "journey_token": "J-FRNanEWqvEfacVDAFeSE",
        "journey_version": "1",
        "timestamp": 1632500000,
        "data": [
            {
                "branch_name": "branch1",
                "workflows": [
                    {
                        "workflow_name": "workflow1",
                        "parameters": {
                            "required": [
                                {
                                    "business_name": True,
                                    "business_federal_eid": True,
                                    "business_registry_id": True,
                                }
                            ],
                            "optional": [{"business_website": True}],
                            "or": [],
                        },
                    }
                ],
            }
        ],
    }
    customers: list[Customer] = [
        {
            "id": "customer_a",
            "name": "Individual",
            "configuration": customer_a_configuration,
            "configuration_formatted": json.dumps(customer_a_configuration, indent=2),
        },
        {
            "id": "customer_b",
            "name": "Business",
            "configuration": customer_b_configuration,
            "configuration_formatted": json.dumps(customer_b_configuration, indent=2),
        },
    ]

    filtered: list[Customer] = []

    for customer in customers:
        # if customer_id is provided, return the customer if it matches the customer_id
        if customer_id is not None:
            if customer_id != customer["id"]:
                continue
            filtered.append(customer)
            # break the loop if customer_id is provided
            break

        # if filter is provided, return the customer if it matches the filter
        if filter is None:
            continue
        if filter.lower() in customer["id"].lower():
            filtered.append(customer)
        elif filter.lower() in customer["name"].lower():
            filtered.append(customer)

    return filtered


def get_customer_configuration(customer_id: str) -> dict:
    customers = get_customers()
    for customer in customers:
        if customer["id"] == customer_id:
            return customer["configuration"]
    raise ValueError(f"Invalid customer_id: {customer_id}")


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

    chats = Chat.objects.filter(space=current_space).order_by("-created_at")
    form_data = chat.form_data if chat else None
    customer = form_data.get("customer") if form_data else None
    language = form_data.get("language") if form_data else None
    current_topic = form_data.get("topic") if form_data else None
    current_guide = form_data.get("current_guide") if form_data else None
    documents = form_data.get("relevant_documents") if form_data else None
    customers = (
        get_customers(customer_id=customer) if customer is not None else get_customers()
    )

    return {
        "current_topic": current_topic,
        "current_organization": current_organization,
        "current_space": current_space,
        "current_customer": customer,
        "current_language": language,
        "current_chat": chat,
        "current_guide": current_guide,
        "organizations": organizations,
        "documents": documents,
        "languages": [{"name": "TypeScript"}, {"name": "Python"}],
        "customers": customers,
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
