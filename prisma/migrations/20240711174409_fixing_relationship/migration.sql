/*
  Warnings:

  - Added the required column `storeId` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `products_product_id_fkey`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `storeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `stores` ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_storeId_fkey` FOREIGN KEY (`storeId`) REFERENCES `stores`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stores` ADD CONSTRAINT `stores_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
