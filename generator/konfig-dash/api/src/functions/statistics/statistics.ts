import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { db } from 'src/lib/db'

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
      last5UsersSignedUp,
      last5UsersToGenerate,
    }),
  }
}
