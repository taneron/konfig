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


::button[Initialize SDK Client]

:::

### 2) Check that the client is able to make a request to the API server

Call the API Status endpoint to make sure the API is live and that you can make
the most basic request. You should receive a response indicating the API status,
current server timestamp, and internal API minor version number.

:::form

\`\`\`python
api_response = snaptrade.api_status.check()
pprint(api_response.body)
\`\`\`

::button[Check API Status]

:::

`
