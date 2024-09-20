/*
  Warnings:

  - You are about to drop the column `userId` on the `stores` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `stores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stores` DROP FOREIGN KEY `stores_userId_fkey`;

-- AlterTable
ALTER TABLE `stores` DROP COLUMN `userId`,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL;
