export const snapTradeGettingStarted = [
  {
    title: '1) Initialize a client with your clientId and consumerKey',
    python: `from snaptrade_client import SnapTrade
from pprint import pprint
import uuid
import os

snaptrade = SnapTrade(
  consumer_key=os.environ["SNAPTRADE_CONSUMER_KEY"],
  client_id=os.environ["SNAPTRADE_CLIENT_ID"],
)

print("Successfully initiated client")
  `,
  },
  {
    title:
      '2) Check that the client is able to make a request to the API server',
    python: `api_response = snaptrade.api_status.check()
pprint(api_response.body)`,
  },
  {
    title: '3) Create a new user on SnapTrade',
    python: `user_id = os.environ["SNAPTRADE_USER_ID"]
register_response = snaptrade.authentication.register_snap_trade_user(
    user_id=user_id
)
pprint(register_response.body)

# Note: A user secret is only generated once. It's required to access
# resources for certain endpoints.
user_secret = register_response.body["userSecret"]`,
  },
  {
    title: '4) Get a redirect URI',
    python: `redirect_uri = snaptrade.authentication.login_snap_trade_user(
  user_id=user_id, user_secret=user_secret
)

print(redirect_uri.body["redirectURI"])
`,
  },
  {
    title: '5) Get account holdings data',
    python: `holdings = snaptrade.account_information.get_all_user_holdings(
  user_id=user_id, user_secret=user_secret
)
pprint(holdings.body)`,
  },
  {
    title: '6) Deleting a user',
    python: `deleted_response = snaptrade.authentication.delete_snap_trade_user(
  user_id=user_id
)
pprint(deleted_response.body)`,
  },
] as const
