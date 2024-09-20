/*
  Warnings:

  - Made the column `updated_at` on table `stores` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `stores` MODIFY `updated_at` DATETIME(3) NOT NULL;
