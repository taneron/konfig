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
import { IconCheck } from '@tabler/icons'
import { KonfigYamlGeneratorNames } from 'konfig-lib'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { useCallback } from 'react'
import { demoState } from 'src/pages/SnaptradePage/SnaptradePage'

const python1 = `from snaptrade_client import SnapTrade
from pprint import pprint

snaptrade = SnapTrade(
    consumer_key=os.environ["SNAPTRADE_CONSUMER_KEY"],
    client_id=os.environ["SNAPTRADE_CLIENT_ID"],
)

print("Successfully initiated client")
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
});

console.log("Successfully initiated client")
`

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

class CellState {
  show = false
  running = false
  ran = false

  constructor() {
    makeAutoObservable(this)
  }

  run() {
    this.running = true
    this.show = false
    this.ran = false
    setTimeout(() => {
      this.running = false
      this.show = true
      this.ran = true
    }, 300)
  }
}

class DemoRunState {
  cells: CellState[] = [
    new CellState(),
    new CellState(),
    new CellState(),
    new CellState(),
    new CellState(),
    new CellState(),
  ]
  constructor() {
    makeAutoObservable(this)
  }

  runCell(index: number) {
    this.cells[index].run()
  }
}

export const demoRunState = new DemoRunState()

const SnapTradeDemo = observer(() => {
  const onTabChange = useCallback((value) => {
    demoState.setLanguage(value)
  }, [])
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
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
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
          <Collapse in={demoRunState.cells[0].show}>
            <Code block>Successfully initiated client</Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[0].run()}
            loading={demoRunState.cells[0].running}
            color={demoRunState.cells[0].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[0].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
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
            <Prism.Tabs
              onTabChange={(value) => {
                demoState.setLanguage(value as KonfigYamlGeneratorNames)
              }}
              value={demoState.language}
            >
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
          <Collapse in={demoRunState.cells[1].show}>
            <Code block>
              {
                "{'online': True, 'timestamp': '2023-05-22T02:33:33.526534Z', 'version': 151}"
              }
            </Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[1].run()}
            loading={demoRunState.cells[1].running}
            color={demoRunState.cells[1].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[1].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
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
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
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
          <Collapse in={demoRunState.cells[2].show}>
            <Code block>
              {
                "{'userId': 'b97dab76-a211-467d-b2d0-5f4b8b5e72e9', 'userSecret': '48fb0b73-ee01-4823-b301-3a8bf41c8449'}"
              }
            </Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[2].run()}
            loading={demoRunState.cells[2].running}
            color={demoRunState.cells[2].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[2].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
          <Title order={3}>4) Get a redirect URI</Title>
          <Text>
            SnapTrade partners need to generate a redirect URI for a user so
            they can securely log in to the SnapTrade Connection portal and
            connect their accounts. The redirect URI can be generated by sending
            a POST request to the Login endpoint. userId and userSecret
            (previously generated through calling the registerUser endpoint)
            have to be in the query parameters of the POST request. The response
            would indicate a redirectURI to be used for login a user to the
            SnapTrade portal.
          </Text>
          <Collapse in={demoState.in}>
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
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
          <Collapse in={demoRunState.cells[3].show}>
            <Code block>
              {
                "{'redirectURI': 'https://app.snaptrade.com/snapTrade/redeemToken?token=ZJnSwmkwPOe4FuQKwB6YsrqyL2ShHN8pt4YVTzsPjl0B2gpa3xMAAEAQt%2B/k8ud%2B0kttPgZUP3ornkU6Yz4VuvJZp7JYGxoCYQv84dcCt2BPpvVW0D7JqGywaG8UVHTYuXpa88s%3D&clientId=SDK-GEN', 'sessionId': 'b51d6e09-a5ba-45ab-b08e-8bab258b39ce'}"
              }
            </Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[3].run()}
            loading={demoRunState.cells[3].running}
            color={demoRunState.cells[3].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[3].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
          <Title order={3}>5) Get account holdings data</Title>
          <Text>
            In order to retrieve user holdings for a specific account, you can
            call the Holdings endpoint by passing the clientId, timestamp,
            userId and list of account numbers (accounts) to filter the
            holdings. In the response, you should get an array of objects
            containing each account holdings data.
          </Text>
          <Collapse in={demoState.in}>
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
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
          <Collapse in={demoRunState.cells[4].show}>
            <Code block>
              {`{'account': {'brokerage_authorization': '2ca80860-41a6-40c7-bb8b-51e6a99bfa70',
                'cash_restrictions': [],
                'created_date': '2023-02-28T19:11:02.605980Z',
                'id': '27f0bbd1-8f3b-4702-9336-6bf7d6a3692f',
                'institution_name': 'Alpaca Paper',
                'meta': {'institution_name': 'Alpaca Paper',
                         'status': 'ACTIVE',
                         'type': 'Margin'},
                'name': 'Alpaca Margin',
                'number': 'PA3MI0Y86VBD',
                'portfolio_group': 'c8599857-68a8-43a7-b123-2c291da40847',
                'sync_status': {'transactions': {'initial_sync_completed': True,
                                                 'last_successful_sync': '2023-05-20'}}},
    'balances': [{'cash': 100000.0,
                  'currency': {'code': 'USD',
                               'id': '57f81c53-bdda-45a7-a51f-032afd1ae41b',
                               'name': 'US Dollar'}}],
    'cache_expired': False,
    'cache_expiry': '2023-05-22T02:41:45.654041Z',
    'cache_timestamp': '2023-05-22T02:36:45.654041Z',
    'option_positions': [],
    'orders': [],
    'positions': []}`}
            </Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[4].run()}
            loading={demoRunState.cells[4].running}
            color={demoRunState.cells[4].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[4].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
          <Title order={3}>6) Deleting a user</Title>
          <Text>
            Disabling all brokerage authorizations and permanently deleting all
            data associated with the user
          </Text>
          <Collapse in={demoState.in}>
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
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
          <Collapse in={demoRunState.cells[5].show}>
            <Code block>
              {`{'detail': 'User queued for deletion; please wait for webhook for '
              'confirmation.',
    'status': 'deleted',
    'userId': '5acda78a-fd2f-4161-b17c-c839e4d356a2'}`}
            </Code>
          </Collapse>
          <Button
            onClick={() => demoRunState.cells[5].run()}
            loading={demoRunState.cells[5].running}
            color={demoRunState.cells[5].ran ? 'green' : 'blue'}
            leftIcon={
              demoRunState.cells[5].ran ? <IconCheck size="1rem" /> : undefined
            }
            compact
            variant="light"
          >
            Run
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
})

export default SnapTradeDemo
