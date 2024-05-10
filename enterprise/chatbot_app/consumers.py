import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer


class GuideConsumer(WebsocketConsumer):
    def connect(self):
        self.chat_id = self.scope["url_route"]["kwargs"]["chat_id"]
        async_to_sync(self.channel_layer.group_add)(self.chat_id, self.channel_name)
        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(self.chat_id, self.channel_name)

    def receive(self, text_data):
        pass

    def template_update(self, event):
        template = event["template"]
        self.send(
            text_data=json.dumps({"type": "template.update", "template": template})
        )
