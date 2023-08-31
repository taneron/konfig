import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { db } from 'src/lib/db'
import * as yaml from 'js-yaml'

const SECRET = '2b2013c9-8d52-48ac-a917-d0ec539768ca'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  logger.info('Invoked statistics function')

  // if not authenticated, just say this page doesn't exist :)
  if (event.headers['secret'] !== SECRET) return { statusCode: 404 }

  const userCount = await db.user.count()
  const generationCount = await db.generateExecution.count()

  const lastQuery = await db.statistics.findFirst({
    orderBy: { created: 'desc' },
  })
  const generationCountDiffSinceLastQuery = lastQuery
    ? generationCount - lastQuery?.generationCount
    : null
  const userCountDiffSinceLastQuery = lastQuery
    ? userCount - lastQuery?.userCount
    : null

  const generateConfigs = await db.generateConfig.findMany({
    take: 500,
    orderBy: { created: 'desc' },
    select: {
      openApiSpecification: true,
      created: true,
    },
  })

  const openapis = generateConfigs.map(({ openApiSpecification }) =>
    yaml.load(openApiSpecification)
  )

  // map openapis to first server url in OAS
  const last5ApisGeneratedForWithServerUrl = openapis
    .map((api, i) => {
      if (typeof api !== 'object') return null
      if (api === null) return null
      if (!('servers' in api)) return null
      const servers = api['servers'] as unknown[]
      if (servers.length === 0) return null
      const server = servers[0]
      if (typeof server !== 'object') return null
      if (server === null) return null
      if (!('url' in server)) return null
      const serverUrl = server.url
      if (typeof serverUrl !== 'string') return null
      return {
        serverUrl,
        created: generateConfigs[i].created,
      }
    })
    .filter((value) => value !== null)

  // find first 5 distinct values in last5ApisGeneratedForWithServerUrl by serverUrl
  const last5ApisGeneratedForWithServerUrlDistinct =
    last5ApisGeneratedForWithServerUrl
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v?.serverUrl === value?.serverUrl) === index
      )
      .slice(0, 5)

  const last5UsersSignedUp = await db.user.findMany({
    take: 5,
    orderBy: { created: 'desc' },
    select: {
      email: true,
      created: true,
    },
  })

  const last5UsersToGenerate = await db.generateExecution.findMany({
    take: 5,
    orderBy: { created: 'desc' },
    select: {
      user: {
        select: {
          email: true,
          created: true,
        },
      },
      created: true,
    },
    distinct: ['userId'],
  })

  await db.statistics.create({
    data: {
      userCount,
      generationCount,
    },
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userCount,
      generationCount,
      userCountDiffSinceLastQuery,
      generationCountDiffSinceLastQuery,
      last5ApisGeneratedForWithServerUrlDistinct,
      last5UsersSignedUp,
      last5UsersToGenerate,
    }),
  }
}
