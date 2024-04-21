from django.db import models
from datetime import datetime

class Chat(models.Model):
    name = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.name:
            self.name = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
        super(Chat, self).save(*args, **kwargs)

class Message(models.Model):
    user_message = models.TextField()
    bot_message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE, related_name='messages')
