/*
  Warnings:

  - You are about to drop the column `addressId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `adresses` DROP FOREIGN KEY `adresses_address_id_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `addressId`;
