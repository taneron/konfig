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
  PasswordInput,
} from '@mantine/core'
import { Prism } from '@mantine/prism'
import { IconCheck } from '@tabler/icons'
import { KonfigYamlGeneratorNames } from 'konfig-lib'
import { snapTradeGettingStarted } from 'konfig-lib/dist/snaptrade-demo'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'
import { useCallback } from 'react'
import { demoState } from 'src/pages/SnaptradePage/SnaptradePage'
import axios from 'axios'

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
  output: string = ''
  id: number

  constructor(id: number) {
    makeAutoObservable(this)
    this.id = id
  }

  async run(params?: { environment_variables: { [name: string]: string } }) {
    this.running = true
    this.show = false
    this.ran = false
    const { data } = await axios.post(`/.redwood/functions/executeCode`, {
      demo: 'snaptrade',
      id: this.id,
      session_id: demoState.sessionId,
      ...params,
    })
    console.log(data)
    this.output = data.output
    this.running = false
    this.show = true
    this.ran = true
  }
}

class DemoRunState {
  clientId: string = ''
  consumerKey: string = ''
  userId: string = ''
  cells: CellState[] = [
    new CellState(0),
    new CellState(1),
    new CellState(2),
    new CellState(3),
    new CellState(4),
    new CellState(5),
  ]
  constructor() {
    makeAutoObservable(this)
  }

  setClientId(value: string) {
    this.clientId = value
  }

  setUserId(value: string) {
    this.userId = value
  }

  setConsumerKey(value: string) {
    this.consumerKey = value
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
          <Title order={3}>{snapTradeGettingStarted[0].title}</Title>
          <Text>
            You can get your <Code>clientId</Code> and <Code>consumerKey</Code>{' '}
            by contacting{' '}
            <Anchor href="mailto: api@snaptrade.com">api@snaptrade.com</Anchor>
          </Text>
          <PasswordInput
            placeholder="YOUR_CLIENT_ID"
            label="Client ID"
            withAsterisk
            value={demoRunState.clientId}
            onChange={(e) => demoRunState.setClientId(e.target.value)}
          />
          <PasswordInput
            placeholder="YOUR_CONSUMER_KEY"
            label="Consumer Key"
            withAsterisk
            value={demoRunState.consumerKey}
            onChange={(e) => demoRunState.setConsumerKey(e.target.value)}
          />
          <Collapse in={demoState.in}>
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {snapTradeGettingStarted[0].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript1}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[0].show}>
            <Code block>{demoRunState.cells[0].output}</Code>
          </Collapse>
          <Button
            onClick={() =>
              demoRunState.cells[0].run({
                environment_variables: {
                  SNAPTRADE_CLIENT_ID: demoRunState.clientId,
                  SNAPTRADE_CONSUMER_KEY: demoRunState.consumerKey,
                },
              })
            }
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
          <Title order={3}>{snapTradeGettingStarted[1].title}</Title>
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
                {snapTradeGettingStarted[1].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript2}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[1].show}>
            <Code block>{demoRunState.cells[1].output}</Code>
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
          <Title order={3}>{snapTradeGettingStarted[2].title}</Title>
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
            value={demoRunState.userId}
            onChange={(e) => demoRunState.setUserId(e.target.value)}
          />
          <Collapse in={demoState.in}>
            <Prism.Tabs onTabChange={onTabChange} value={demoState.language}>
              <Prism.TabsList>
                <Prism.Tab value="python">Python</Prism.Tab>
                <Prism.Tab value="typescript">TypeScript</Prism.Tab>
              </Prism.TabsList>
              <Prism.Panel value="python" language="python">
                {snapTradeGettingStarted[2].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript3}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[2].show}>
            <Code block>{demoRunState.cells[2].output}</Code>
          </Collapse>
          <Button
            onClick={() =>
              demoRunState.cells[2].run({
                environment_variables: {
                  SNAPTRADE_USER_ID: demoRunState.userId,
                },
              })
            }
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
          <Title order={3}>{snapTradeGettingStarted[3].title}</Title>
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
                {snapTradeGettingStarted[3].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript4}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[3].show}>
            <Code block>{demoRunState.cells[3].output}</Code>
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
          <Title order={3}>{snapTradeGettingStarted[4].title}</Title>
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
                {snapTradeGettingStarted[4].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript5}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[4].show}>
            <Code block>{demoRunState.cells[4].output}</Code>
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
          <Title order={3}>{snapTradeGettingStarted[5].title}</Title>
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
                {snapTradeGettingStarted[5].python}
              </Prism.Panel>
              <Prism.Panel value="typescript" language="typescript">
                {typescript6}
              </Prism.Panel>
            </Prism.Tabs>
          </Collapse>
          <Collapse in={demoRunState.cells[5].show}>
            <Code block>{demoRunState.cells[5].output}</Code>
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
