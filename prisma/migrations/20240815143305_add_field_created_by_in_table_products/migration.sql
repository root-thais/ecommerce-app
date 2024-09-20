/*
  Warnings:

  - Added the required column `created_by` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stores` ADD COLUMN `created_by` VARCHAR(191) NOT NULL;
