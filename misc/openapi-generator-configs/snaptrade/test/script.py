from snaptrade.api_client import SnapTradeAPIClient
import uuid
import pdb

# 1) Initialize a client with your clientID and consumerKey.
client = SnapTradeAPIClient("SDK-GEN", "XLla46KKcmkkU49DzVCT8AhIiY76z6iZ7eimsygM8VMw0Vr0PY")

# 2) Check that the client is able to make a request to the API server.
api_status_response = client.api_status()
print(api_status_response)

# 3) Create a new user on SnapTrade
user_id = str(uuid.uuid4())
print(user_id)

register_response = client.register_user(user_id)

# Note: A user secret is only generated once. It's required to access
# resources for certain endpoints.

user_secret = register_response.get("userSecret")
print(user_secret)

# 4) Get a redirect URI. Users will need this to connect
# their brokerage to the SnapTrade server.

redirect_uri = client.get_user_login_redirect_uri("e578ea0f-291b-439b-87a0-f966708c905e", "14a81d08-0b22-4d8f-b799-b3c2ea618e05").get("redirectURI")

print(redirect_uri)

# 5) Obtaining account holdings data

# holdings = client.get_all_holdings(user_id, user_secret)

# 6) Deleting a user
# deleted_response = client.delete_user(user_id)