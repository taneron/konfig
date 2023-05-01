/*
  Warnings:

  - You are about to drop the `GenerateConfig` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GenerateConfig" DROP CONSTRAINT "GenerateConfig_spaceId_fkey";

-- DropForeignKey
ALTER TABLE "GenerateConfig" DROP CONSTRAINT "GenerateConfig_userId_fkey";

-- DropTable
DROP TABLE "GenerateConfig";
