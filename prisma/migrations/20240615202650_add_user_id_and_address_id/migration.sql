/*
  Warnings:

  - You are about to drop the column `user_id` on the `adresses` table. All the data in the column will be lost.
  - Added the required column `userId` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `adresses` DROP COLUMN `user_id`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `addressId` INTEGER NULL;
