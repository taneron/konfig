/*
  Warnings:

  - Added the required column `userId` to the `GenerateExecution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenerateExecution" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GenerateExecution" ADD CONSTRAINT "GenerateExecution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
