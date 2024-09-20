-- AlterTable
ALTER TABLE `users` MODIFY `type` ENUM('admin', 'seller', 'client') NOT NULL;
