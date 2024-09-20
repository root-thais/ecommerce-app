-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `document_cpf` VARCHAR(191) NOT NULL,
    `date_of_birth` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `type` ENUM('admin', 'seller') NOT NULL,

    UNIQUE INDEX `users_user_id_key`(`user_id`),
    UNIQUE INDEX `users_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adresses` (
    `address_id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(191) NOT NULL,
    `neighborhood` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `house_number` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `complement` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `adresses_address_id_key`(`address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `stores`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `adresses` ADD CONSTRAINT `adresses_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
