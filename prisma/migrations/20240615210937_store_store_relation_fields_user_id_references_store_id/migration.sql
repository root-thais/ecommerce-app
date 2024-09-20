-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_user_id_fkey`;

-- DropIndex
DROP INDEX `adresses_address_id_key` ON `adresses`;
