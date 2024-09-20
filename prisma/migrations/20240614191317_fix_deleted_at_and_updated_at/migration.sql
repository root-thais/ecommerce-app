-- AlterTable
ALTER TABLE `adresses` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `deleted_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `deleted_at` DATETIME(3) NULL;
