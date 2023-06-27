from twilio.rest import Client

# Twilio account credentials
account_sid = 'YOUR_ACCOUNT_SID'
auth_token = 'YOUR_AUTH_TOKEN'

# Set the sender's and recipient's phone numbers
from_number = '+1234567890'  # Your Twilio phone number
to_number = '+9876543210'  # Destination phone number

# Set the message content
message = 'Hello from Twilio!'

# Step 1: Send SMS
client = Client(account_sid, auth_token)
send_response = client.messages.create(
    from_=from_number,
    to=to_number,
    body=message
)

sms_sid = send_response.sid

# Step 2: Retrieve SMS details
sms = client.messages(sms_sid).fetch()
