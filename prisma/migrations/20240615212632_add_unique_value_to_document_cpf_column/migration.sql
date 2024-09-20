/*
  Warnings:

  - A unique constraint covering the columns `[document_cpf]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `users_user_id_key` ON `users`;

-- CreateIndex
CREATE UNIQUE INDEX `users_document_cpf_key` ON `users`(`document_cpf`);
