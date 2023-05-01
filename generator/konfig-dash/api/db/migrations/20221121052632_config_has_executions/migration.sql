/*
  Warnings:

  - Added the required column `generateConfigId` to the `GenerateExecution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenerateExecution" ADD COLUMN     "generateConfigId" TEXT NOT NULL DEFAULT 'dummy';

-- AddForeignKey
ALTER TABLE "GenerateExecution" ADD CONSTRAINT "GenerateExecution_generateConfigId_fkey" FOREIGN KEY ("generateConfigId") REFERENCES "GenerateConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
