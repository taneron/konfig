import {
  ensureConfigSetup,
  getKonfigHomeDirectoryPath,
  HomeDirParams,
} from '../../src/util/ensure-config-setup'
import * as fs from 'fs'

describe('ensure-config-setup', () => {
  const homeParams: HomeDirParams = {
    mode: 'test',
  }
  const homeDir = getKonfigHomeDirectoryPath(homeParams)

  const reset = () => {
    fs.rmSync(homeDir, { recursive: true, force: true })
  }

  it('when no directory previously exists', () => {
    reset()
    ensureConfigSetup(homeParams)
  })

  it('when directory already exists', () => {
    reset()
    ensureConfigSetup(homeParams)
    ensureConfigSetup(homeParams)
  })
})
