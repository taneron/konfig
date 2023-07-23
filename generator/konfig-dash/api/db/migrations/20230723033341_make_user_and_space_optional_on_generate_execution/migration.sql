-- DropForeignKey
ALTER TABLE "GenerateExecution" DROP CONSTRAINT "GenerateExecution_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "GenerateExecution" DROP CONSTRAINT "GenerateExecution_userId_fkey";

-- AlterTable
ALTER TABLE "GenerateExecution" ALTER COLUMN "spaceId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GenerateExecution" ADD CONSTRAINT "GenerateExecution_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerateExecution" ADD CONSTRAINT "GenerateExecution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
