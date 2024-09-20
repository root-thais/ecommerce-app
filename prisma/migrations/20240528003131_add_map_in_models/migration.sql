/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Store` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_product_id_fkey`;

-- DropTable
DROP TABLE `Product`;

-- DropTable
DROP TABLE `Store`;

-- CreateTable
CREATE TABLE `products` (
    `product_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `qtd_product` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `brand` VARCHAR(191) NOT NULL,
    `characteristics` VARCHAR(191) NOT NULL,
    `product_review` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `products_product_id_key`(`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stores` (
    `store_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `status` ENUM('active', 'inactive') NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `instagram_url` VARCHAR(191) NOT NULL,
    `facebook_url` VARCHAR(191) NOT NULL,
    `x_url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `stores_store_id_key`(`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `stores`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
