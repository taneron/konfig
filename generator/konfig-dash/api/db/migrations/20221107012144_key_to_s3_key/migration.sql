/*
  Warnings:

  - You are about to drop the column `key` on the `GenerateExecution` table. All the data in the column will be lost.
  - Added the required column `s3Key` to the `GenerateExecution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenerateExecution" DROP COLUMN "key",
ADD COLUMN     "s3Key" TEXT NOT NULL DEFAULT '';
