import { API_KEY_HEADER_NAME } from 'konfig-lib'

const apiKeys: Record<string, string> = {
  qXx6mYhoJgbj8brJe11NeBNsul375Nv3: 'humanloop',
  Mu82mVyHm4D1p1zljd8T8sQvxtaIZ5b2: 'konfig-dev',
  g774QbmWUqt6BgqYqaDRhs70bhb9GcEd: 'groundxai',
  mlTgDY71gh0IArP2rmlcFnLcyHmvUZWr: 'leap-ai',
  WhSlSOXvNo1pp5895MM2RatQndYurSUw: 'Carbon-for-Developers',
  MMUM5J8aWKqSVyg6xUAj8hOTf5FtG4Hf: 'passiv',
}

export function validateApiKey({
  key,
  owner,
}: {
  key: string | undefined
  owner: string
}) {
  if (key === undefined) throw Error(`Missing header ${API_KEY_HEADER_NAME}`)
  if (apiKeys[key] === undefined || apiKeys[key] !== owner)
    throw Error(`Invalid header ${API_KEY_HEADER_NAME}`)
}
