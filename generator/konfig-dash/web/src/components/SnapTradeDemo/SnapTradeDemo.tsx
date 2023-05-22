import {
  Text,
  Container,
  Paper,
  Stack,
  Title,
  Code,
  TextInput,
  Button,
  Collapse,
  Anchor,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { observer } from 'mobx-react'
import { demoState } from 'src/pages/SnaptradePage/SnaptradePage'

const python1 = `from snaptrade_client import SnapTrade
from pprint import pprint

snaptrade = SnapTrade(
    consumer_key=os.environ["SNAPTRADE_CONSUMER_KEY"],
    client_id=os.environ["SNAPTRADE_CLIENT_ID"],
)
`

const python2 = `api_response = snaptrade.api_status.check()
pprint(api_response.body)`

const python3 = `user_id = os.environ["SNAPTRADE_USER_ID"]
register_response = snaptrade.authentication.register_snap_trade_user(
    user_id=user_id
)
pprint(register_response.body)

# Note: A user secret is only generated once. It's required to access
# resources for certain endpoints.
user_secret = register_response.body["userSecret"]
`

const python4 = `redirect_uri = snaptrade.authentication.login_snap_trade_user(
  user_id=user_id, user_secret=user_secret
)
print(redirect_uri.body)
`

const python5 = `holdings = snaptrade.account_information.get_all_user_holdings(
    user_id=user_id, user_secret=user_secret
)
pprint(holdings.body)`

const python6 = `deleted_response = snaptrade.authentication.delete_snap_trade_user(
    user_id=user_id
)
pprint(deleted_response.body)`

const typescript1 = `import { Snaptrade } = "snaptrade-typescript-sdk";

const snaptrade = new Snaptrade({
  consumerKey: process.env.SNAPTRADE_CONSUMER_KEY,
  clientId: process.env.SNAPTRADE_CLIENT_ID,
});`

const typescript2 = `const status = await snaptrade.apiStatus.check();
console.log("status:", status.data);`

const typescript3 = `const userId = process.env.SNAPTRADE_USER_ID;
const { userSecret } = (
  await snaptrade.authentication.registerSnapTradeUser({
    userId,
  })
).data;

// Note: A user secret is only generated once. It's required to access
// resources for certain endpoints.
console.log("userSecret:", userSecret);
`

const typescript4 = `const data = (
  await snaptrade.authentication.loginSnapTradeUser({ userId, userSecret })
).data;
if (!("redirectURI" in data)) throw Error("Should have gotten redirect URI");
console.log("redirectURI:", data.redirectURI);
`

const typescript5 = `const holdings = (
  await snaptrade.accountInformation.getAllUserHoldings({
    userId,
    userSecret,
  })
).data;
console.log("holdings:", holdings);`

const typescript6 = `const deleteResponse = (
  await snaptrade.authentication.deleteSnapTradeUser({ userId })
).data;
console.log("deleteResponse:", deleteResponse);
`

const SnapTradeDemo = observer(() => {
  return (
    <Container size="xl">
      <Paper shadow="md" p="md" withBorder>
        <Stack>
          <Title order={3}>
            1) Initialize a client with your <Code>clientId</Code> and{' '}
            <Code>consumerKey</Code>
          </Title>
          <Text>
            You can get your <Code>clientId</Code> and <Code>consumerKey</Code>{' '}
            by contacting{' '}
            <Anchor href="mailto: api@snaptrade.com">api@snaptrade.com</Anchor>
          </Text>
          <TextInput
            placeholder="YOUR_CLIENT_ID"
            label="Client ID"
            withAsterisk
          />
          <TextInput
            placeholder="YOUR_CONSUMER_KEY"
            label="Consumer Key"
            withAsterisk
          />
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python1}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript1}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
          <Title order={3}>
            2) Check that the client is able to make a request to the API server
          </Title>
          <Text>
            Call the API Status endpoint to make sure the API is live and that
            you can make the most basic request. You should receive a response
            indicating the API status, current server timestamp, and internal
            API minor version number.
          </Text>
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python2}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript2}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
          <Title order={3}>3) Create a new user on SnapTrade</Title>
          <Text>
            To create a secure brokerage authorization, we first need to
            register a test user. Call the Register user endpoint with a userId
            which can be any string as long as it's unique to a user. Upon
            receiving a 200 response, the user is registered successfully and
            you should receive a response with a user id and a randomly
            generated user secret. You can think of the user secret like a
            per-user API key that provides an additional layer of security for
            protecting user data. The user id and user secret need to be passed
            along to all SnapTrade API endpoints that involve access to user
            data.
          </Text>
          <TextInput
            placeholder="YOUR_SNAPTRADE_USER_ID"
            label="SnapTrade User ID"
            withAsterisk
          />
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python3}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript3}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
          <Title order={3}>4) Get a redirect URI</Title>
          <TextInput
            placeholder="YOUR_SNAPTRADE_USER_ID"
            label="SnapTrade User ID"
            withAsterisk
          />
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python4}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript4}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
          <Title order={3}>5) Get account holdings data</Title>
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python5}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript5}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
          <Title order={3}>6) Deleting a user</Title>
          <Collapse in={demoState.in}>
            <Prism.Tabs defaultValue="python">
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {python6}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript6}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Button variant="light">Run</Button>
        </Stack>
      </Paper>
    </Container>
  )
})

export default SnapTradeDemo
