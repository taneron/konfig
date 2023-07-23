import { Command, Flags, CliUx } from '@oclif/core'
import { getApiUrl } from '../util/get-api-url'
import axios, { AxiosError } from 'axios'
import { parse } from 'cookie'
import * as fs from 'node:fs'
import { getSessionTokenPath } from '../util/get-session-token-path'
import { getUserIdPath } from '../util/get-user-id-path'
import { ensureConfigSetup, HomeDirParams } from '../util/ensure-config-setup'
import { removeTrailingSlash } from '../util/remove-trailing-slash'

export default class Login extends Command {
  static description = 'Login to api.konfigthis.com'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    dev: Flags.boolean({ char: 'd', hidden: true }),
    apiUrl: Flags.url({ char: 'a', name: 'apiUrl', hidden: true }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Login)
    const origin = flags.apiUrl
      ? removeTrailingSlash(flags.apiUrl.href)
      : getApiUrl({ mode: flags.dev ? 'dev' : 'prod' })
    const loginApiUrl = `${origin}/auth`
    this.debug(loginApiUrl)
    this.log(
      `Logging into ${origin}. Sign up at https://dash.konfigthis.com/signup`
    )
    const email = await CliUx.ux.prompt('Email')
    const password = await CliUx.ux.prompt('Password', { type: 'hide' })
    const payload = JSON.stringify({
      method: 'login',
      password,
      username: email,
    })
    this.debug(payload)
    try {
      const { headers, data } = await axios.post(loginApiUrl, payload, {
        withCredentials: true,
      })

      this.debug(headers)
      this.debug(data)

      const userId = data.id
      if (userId === undefined) {
        this.error('Unexpected return value')
      }

      const homeParams: HomeDirParams = {
        mode: flags.dev ? 'dev' : 'prod',
      }

      ensureConfigSetup(homeParams)
      this.debug('userIdPath:', getUserIdPath(homeParams))
      this.debug('userId:', userId)
      fs.writeFileSync(getUserIdPath(homeParams), userId.toString())

      const session = data.session
      if (session === undefined) {
        this.error('Could not find session cookie')
      }

      fs.writeFileSync(getSessionTokenPath(homeParams), session)
      this.log(`Successfully logged in as ${email}`)
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        if (error instanceof Error) this.error(error)
        if (typeof error === 'string') this.error(error)
      }

      if (error instanceof AxiosError) {
        this.error(error.message)
      }
    }
  }
}
