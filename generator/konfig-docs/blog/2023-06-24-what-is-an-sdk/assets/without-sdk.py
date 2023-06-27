import requests

# Twilio account credentials
account_sid = 'YOUR_ACCOUNT_SID'
auth_token = 'YOUR_AUTH_TOKEN'

# Set the sender's and recipient's phone numbers
from_number = '+1234567890'  # Your Twilio phone number
to_number = '+9876543210'  # Destination phone number

# Set the message content
message = 'Hello from Twilio!'

# Twilio API endpoint
url = f'https://api.twilio.com/2010-04-01/Accounts/{account_sid}/Messages.json'

# Step 1: Send SMS
send_data = {
    'From': from_number,
    'To': to_number,
    'Body': message
}

auth = (account_sid, auth_token)
send_response = requests.post(url, data=send_data, auth=auth)

sms_sid = send_response.json()['sid']

# Step 2: Retrieve SMS details
retrieve_url = f'{url}/{sms_sid}.json'
retrieve_response = requests.get(retrieve_url, auth=auth)

sms_data = retrieve_response.json()
