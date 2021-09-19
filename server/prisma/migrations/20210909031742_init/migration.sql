/*
  Warnings:

  - You are about to drop the column `locationId` on the `Location` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Location` DROP FOREIGN KEY `Location_ibfk_1`;

-- AlterTable
ALTER TABLE `Location` DROP COLUMN `locationId`,
    ADD COLUMN `parentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Location` ADD FOREIGN KEY (`parentId`) REFERENCES `Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
