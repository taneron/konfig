/*
  Warnings:

  - You are about to drop the column `statisticsId` on the `User` table. All the data in the column will be lost.
  - Added the required column `generationCountDiffSinceLastQuery` to the `Statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last5UsersSignedUp` to the `Statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last5UsersToGenerate` to the `Statistics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCountDiffSinceLastQuery` to the `Statistics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_statisticsId_fkey";

-- AlterTable
ALTER TABLE "Statistics" ADD COLUMN     "generationCountDiffSinceLastQuery" INTEGER NOT NULL,
ADD COLUMN     "last5UsersSignedUp" JSONB NOT NULL,
ADD COLUMN     "last5UsersToGenerate" JSONB NOT NULL,
ADD COLUMN     "userCountDiffSinceLastQuery" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "statisticsId";
