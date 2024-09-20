/*
  Warnings:

  - A unique constraint covering the columns `[store_id]` on the table `stores` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `stores_store_id_key` ON `stores`(`store_id`);
