import type { PrismaClient } from '@prisma/client'

export default async ({ db }: { db: PrismaClient }) => {
  const dummyOrganization = await db.organization.create({
    data: {
      name: 'dummyOrg',
    },
  })
  const dummySpace = await db.space.create({
    data: {
      name: 'dummySpace',
      organizationId: dummyOrganization.id,
    },
  })

  const dummyUser = await db.user.create({
    data: {
      email: 'dummyemail2@dummy.com',
      hashedPassword: 'dummy',
      salt: 'dummy',
      currentSpaceId: dummySpace.id,
      currentOrganizationId: dummyOrganization.id,
    },
  })

  await db.generateExecution.create({
    data: {
      s3Key: 'dummy',
      spaceId: dummySpace.id,
      userId: dummyUser.id,
    },
  })

  await db.generateConfig.create({
    data: {
      id: 'dummy',
      konfigyaml: 'dummy',
      userId: dummyUser.id,
      spaceId: dummySpace.id,
    },
  })
}
