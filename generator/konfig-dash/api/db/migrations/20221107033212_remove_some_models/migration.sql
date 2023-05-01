/*
  Warnings:

  - You are about to drop the column `webAuthnChallenge` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `UserCredential` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCredential" DROP CONSTRAINT "UserCredential_userId_fkey";

-- DropIndex
DROP INDEX "User_webAuthnChallenge_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "webAuthnChallenge";

-- DropTable
DROP TABLE "UserCredential";
