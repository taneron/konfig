import {
  Text,
  Container,
  Paper,
  Stack,
  Title,
  Code,
  TextInput,
  Button,
} from '@mantine/core'
import { Prism } from '@mantine/prism'

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
pprint(register_response.body)`

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
`

const SnapTradeDemo = () => {
  return (
    <Container size="xl">
      <Paper shadow="md" p="md" withBorder>
        <Stack>
          <Title order={3}>
            1) Initialize a client with your <Code>clientId</Code> and{' '}
            <Code>consumerKey</Code>
          </Title>
          <Text>
            You can get your <Code>clientId</Code> and <Code>consumerKey</Code>
            by contacting api@snaptrade.com
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
          <Button>Run</Button>
          <Title order={3}>
            2) Check that the client is able to make a request to the API server
          </Title>
          <Text>
            Call the API Status endpoint to make sure the API is live and that
            you can make the most basic request. You should receive a response
            indicating the API status, current server timestamp, and internal
            API minor version number.
          </Text>
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
          <Button>Run</Button>
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
          <Button>Run</Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default SnapTradeDemo
