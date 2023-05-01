/*
  Warnings:

  - Added the required column `openApiSpecification` to the `GenerateConfig` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenerateConfig" ADD COLUMN     "openApiSpecification" TEXT NOT NULL default '';
