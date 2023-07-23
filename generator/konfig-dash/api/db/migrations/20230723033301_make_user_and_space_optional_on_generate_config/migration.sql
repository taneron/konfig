-- DropForeignKey
ALTER TABLE "GenerateConfig" DROP CONSTRAINT "GenerateConfig_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "GenerateConfig" DROP CONSTRAINT "GenerateConfig_userId_fkey";

-- AlterTable
ALTER TABLE "GenerateConfig" ALTER COLUMN "spaceId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GenerateConfig" ADD CONSTRAINT "GenerateConfig_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerateConfig" ADD CONSTRAINT "GenerateConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
