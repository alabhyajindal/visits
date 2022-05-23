/*
  Warnings:

  - Added the required column `location` to the `Visit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visit" ADD COLUMN     "location" TEXT NOT NULL;
