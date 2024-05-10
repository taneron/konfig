import json

from channels.generic.websocket import WebsocketConsumer


class TemplateConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({"message": "Hello, world!"}))

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        pass
