/*
  Warnings:

  - You are about to drop the `AllowedEmails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deployment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Execution` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Deployment" DROP CONSTRAINT "Deployment_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "Execution" DROP CONSTRAINT "Execution_deploymentId_fkey";

-- DropForeignKey
ALTER TABLE "Execution" DROP CONSTRAINT "Execution_spaceId_fkey";

-- DropTable
DROP TABLE "AllowedEmails";

-- DropTable
DROP TABLE "Deployment";

-- DropTable
DROP TABLE "Execution";

-- CreateTable
CREATE TABLE "GenerateExecution" (
    "id" SERIAL NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "key" TEXT NOT NULL,
    "spaceId" INTEGER NOT NULL,

    CONSTRAINT "GenerateExecution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GenerateExecution_spaceId_idx" ON "GenerateExecution"("spaceId");

-- AddForeignKey
ALTER TABLE "GenerateExecution" ADD CONSTRAINT "GenerateExecution_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
