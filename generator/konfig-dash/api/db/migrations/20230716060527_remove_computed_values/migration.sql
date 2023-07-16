/*
  Warnings:

  - You are about to drop the column `generationCountDiffSinceLastQuery` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `last5UsersSignedUp` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `last5UsersToGenerate` on the `Statistics` table. All the data in the column will be lost.
  - You are about to drop the column `userCountDiffSinceLastQuery` on the `Statistics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Statistics" DROP COLUMN "generationCountDiffSinceLastQuery",
DROP COLUMN "last5UsersSignedUp",
DROP COLUMN "last5UsersToGenerate",
DROP COLUMN "userCountDiffSinceLastQuery";
