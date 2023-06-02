type DemoCellContent = {
  title: string
  python: string
  typescript?: string
}

export const snapTradeGettingStartedMarkdown = `### 1) Initialize a client with your clientId and consumerKey

You can get your \`clientId\` and \`consumerKey\` by contacting [api@snaptrade.com](mailto:api@snaptrade.com)

:::form

::input{#SNAPTRADE_CLIENT_ID label="Client ID" placeholder="YOUR_CLIENT_ID" type="password"}

::input{#SNAPTRADE_CONSUMER_KEY label="Consumer Key" placeholder="YOUR_CONSUMER_KEY" type="password"}

\`\`\`python
from snaptrade_client import SnapTrade
from pprint import pprint
import uuid
import os

snaptrade = SnapTrade(
  consumer_key=os.environ["SNAPTRADE_CONSUMER_KEY"],
  client_id=os.environ["SNAPTRADE_CLIENT_ID"],
)

print("Successfully initiated client")
\`\`\`


::button

:::

`

export const snapTradeGettingStarted: DemoCellContent[] = [
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
    typescript: `import { Snaptrade } = "snaptrade-typescript-sdk";

const snaptrade = new Snaptrade({
  consumerKey: process.env.SNAPTRADE_CONSUMER_KEY,
  clientId: process.env.SNAPTRADE_CLIENT_ID,
});

console.log("Successfully initiated client")
`,
  },
  {
    title:
      '2) Check that the client is able to make a request to the API server',
    python: `api_response = snaptrade.api_status.check()
pprint(api_response.body)`,
    typescript: `const status = await snaptrade.apiStatus.check();
console.log("status:", status.data);`,
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
    typescript: `const userId = process.env.SNAPTRADE_USER_ID;
const { userSecret } = (
  await snaptrade.authentication.registerSnapTradeUser({
    userId,
  })
).data;

// Note: A user secret is only generated once. It's required to access
// resources for certain endpoints.
console.log("userSecret:", userSecret);
`,
  },
  {
    title: '4) Get a redirect URI',
    python: `redirect_uri = snaptrade.authentication.login_snap_trade_user(
  user_id=user_id, user_secret=user_secret
)

print(redirect_uri.body["redirectURI"])
`,

    typescript: `const data = (
  await snaptrade.authentication.loginSnapTradeUser({ userId, userSecret })
).data;
if (!("redirectURI" in data)) throw Error("Should have gotten redirect URI");
console.log("redirectURI:", data.redirectURI);
`,
  },
  {
    title: '5) Get account holdings data',
    python: `holdings = snaptrade.account_information.get_all_user_holdings(
  user_id=user_id, user_secret=user_secret
)
pprint(holdings.body)`,
    typescript: `const holdings = (
  await snaptrade.accountInformation.getAllUserHoldings({
    userId,
    userSecret,
  })
).data;
console.log("holdings:", holdings);`,
  },

  {
    title: '6) Deleting a user',
    python: `deleted_response = snaptrade.authentication.delete_snap_trade_user(
  user_id=user_id
)
pprint(deleted_response.body)`,
    typescript: `const deleteResponse = (
  await snaptrade.authentication.deleteSnapTradeUser({ userId })
).data;
console.log("deleteResponse:", deleteResponse);
`,
  },
]

export const snapTradeRegisteringUsers: DemoCellContent[] = [
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
    typescript: `import { Snaptrade } = "snaptrade-typescript-sdk";

const snaptrade = new Snaptrade({
  consumerKey: process.env.SNAPTRADE_CONSUMER_KEY,
  clientId: process.env.SNAPTRADE_CLIENT_ID,
});

console.log("Successfully initiated client")
`,
  },
  {
    title: '2) Create a new user on SnapTrade',
    python: `user_id = os.environ["SNAPTRADE_USER_ID"]
register_response = snaptrade.authentication.register_snap_trade_user(
    user_id=user_id
)
pprint(register_response.body)

# Note: A user secret is only generated once. It's required to access
# resources for certain endpoints.
user_secret = register_response.body["userSecret"]`,
    typescript: `const userId = process.env.SNAPTRADE_USER_ID;
const { userSecret } = (
  await snaptrade.authentication.registerSnapTradeUser({
    userId,
  })
).data;

// Note: A user secret is only generated once. It's required to access
// resources for certain endpoints.
console.log("userSecret:", userSecret);
`,
  },
  {
    title: '3) List all users',
    python: `list_snap_trade_users_response = snaptrade.authentication.list_snap_trade_users()
pprint(list_snap_trade_users_response.body)`,
    typescript: `const listSnapTradeUsersResponse = (
  await snaptrade.authentication.listSnapTradeUsers()
).data;
console.log(listSnapTradeUsersResponse);`,
  },
  {
    title: '4) Deleting a user',
    python: `deleted_response = snaptrade.authentication.delete_snap_trade_user(
  user_id=user_id
)
pprint(deleted_response.body)`,
    typescript: `const deleteResponse = (
  await snaptrade.authentication.deleteSnapTradeUser({ userId })
).data;
console.log("deleteResponse:", deleteResponse);
`,
  },
]
