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
import CellOutput from '../CellOutput/CellOutput'
import DemoTitle from '../DemoTitle/DemoTitle'
import DemoRunButton from '../DemoRunButton/DemoRunButton'

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

export type RunCellParams = {
  environment_variables: { [name: string]: string }
}

export class CellState {
  show = false
  running = false
  state: 'Success' | 'Error' | 'N/A' = 'N/A'
  output: string = ''
  id: number
  _disabled: boolean
  focused = false
  disableOverride?: () => boolean

  constructor(id: number, disabled: boolean, disableOverride?: () => boolean) {
    makeAutoObservable(this)
    this.id = id
    this._disabled = disabled
    this.disableOverride = disableOverride
  }

  get ranSuccessfully() {
    return this.state === 'Success'
  }

  get failed() {
    return this.state === 'Error'
  }

  focus() {
    this.focused = true
    setTimeout(() => {
      this.focused = false
    }, 2000)
  }

  async run(params?: RunCellParams) {
    this.running = true
    this.show = false
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
    this.state = data.error === '' ? 'Success' : 'Error'
    if (this.id < 5 && this.state === 'Success')
      demoRunState.cells[this.id + 1]._disabled = false
  }

  get disabled() {
    return this._disabled
      ? true
      : this.disableOverride !== undefined
      ? this.disableOverride()
      : this._disabled
  }
}

class DemoRunState {
  clientId: string = ''
  consumerKey: string = ''
  userId: string = ''
  cells: CellState[] = [
    new CellState(0, false, () => {
      return this.clientId === '' || this.consumerKey === ''
    }),
    new CellState(1, true),
    new CellState(2, true, () => this.userId === ''),
    new CellState(3, true),
    new CellState(4, true),
    new CellState(5, true),
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
          <DemoTitle
            title={snapTradeGettingStarted[0].title}
            focused={demoRunState.cells[0].focused}
          />
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
            autoComplete="off"
            onChange={(e) => demoRunState.setClientId(e.target.value)}
          />
          <PasswordInput
            placeholder="YOUR_CONSUMER_KEY"
            label="Consumer Key"
            withAsterisk
            autoComplete="off"
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
          <CellOutput cell={demoRunState.cells[0]} />
          <DemoRunButton
            runParams={{
              environment_variables: {
                SNAPTRADE_CLIENT_ID: demoRunState.clientId,
                SNAPTRADE_CONSUMER_KEY: demoRunState.consumerKey,
              },
            }}
            cell={demoRunState.cells[0]}
          />
          <DemoTitle
            title={snapTradeGettingStarted[1].title}
            focused={demoRunState.cells[1].focused}
          />
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
          <CellOutput cell={demoRunState.cells[1]} />
          <DemoRunButton cell={demoRunState.cells[1]} />
          <DemoTitle
            title={snapTradeGettingStarted[2].title}
            focused={demoRunState.cells[2].focused}
          />
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
          <CellOutput cell={demoRunState.cells[2]} />
          <DemoRunButton
            runParams={{
              environment_variables: {
                SNAPTRADE_USER_ID: demoRunState.userId,
              },
            }}
            cell={demoRunState.cells[2]}
          />
          <DemoTitle
            title={snapTradeGettingStarted[3].title}
            focused={demoRunState.cells[3].focused}
          />
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
          <CellOutput cell={demoRunState.cells[3]} />
          <DemoRunButton cell={demoRunState.cells[3]} />
          <DemoTitle
            title={snapTradeGettingStarted[4].title}
            focused={demoRunState.cells[4].focused}
          />
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
          <CellOutput cell={demoRunState.cells[4]} />
          <DemoRunButton cell={demoRunState.cells[4]} />
          <DemoTitle
            title={snapTradeGettingStarted[5].title}
            focused={demoRunState.cells[5].focused}
          />
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
          <CellOutput cell={demoRunState.cells[5]} />
          <DemoRunButton cell={demoRunState.cells[5]} />
        </Stack>
      </Paper>
    </Container>
  )
})

export default SnapTradeDemo
