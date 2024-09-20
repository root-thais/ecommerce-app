-- CreateTable
CREATE TABLE `Product` (
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

    UNIQUE INDEX `Product_product_id_key`(`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Store` (
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

    UNIQUE INDEX `Store_store_id_key`(`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Store`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
