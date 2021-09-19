-- CreateTable
CREATE TABLE `Manager` (
    `id` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'MANAGER') NOT NULL DEFAULT 'ADMIN',
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `isCertified` BOOLEAN NOT NULL DEFAULT false,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `leavedAt` DATETIME(3),

    UNIQUE INDEX `Manager.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ManagerExtendedProfile` (
    `id` VARCHAR(191) NOT NULL,
    `managerId` VARCHAR(191) NOT NULL,
    `photoUrl` VARCHAR(191),
    `mobile` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191),

    UNIQUE INDEX `ManagerExtendedProfile_managerId_unique`(`managerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocialMeta` (
    `id` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `socialId` VARCHAR(191) NOT NULL,
    `managerId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SocialMeta.provider_socialId_unique`(`provider`, `socialId`),
    UNIQUE INDEX `SocialMeta_managerId_unique`(`managerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `assortment` ENUM('INDIVIDUAL', 'COMPANY') NOT NULL DEFAULT 'COMPANY',
    `avatar` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cart` VARCHAR(191) NOT NULL,
    `sale` VARCHAR(191) NOT NULL,
    `purchase` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountExtendedProfile` (
    `id` VARCHAR(191) NOT NULL,
    `accountId` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191),

    UNIQUE INDEX `AccountExtendedProfile_accountId_unique`(`accountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountContact` (
    `id` VARCHAR(191) NOT NULL,
    `office` VARCHAR(191),
    `fax` VARCHAR(191),
    `mobile` VARCHAR(191),
    `profileId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AccountContact_profileId_unique`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accountbusiness` (
    `id` VARCHAR(191) NOT NULL,
    `businessRegistrationNumber` VARCHAR(191) NOT NULL,
    `representatives` VARCHAR(191) NOT NULL,
    `businessAddress` VARCHAR(191) NOT NULL,
    `businessType` VARCHAR(191) NOT NULL,
    `businessItem` VARCHAR(191) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Accountbusiness_profileId_unique`(`profileId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ManagerExtendedProfile` ADD FOREIGN KEY (`managerId`) REFERENCES `Manager`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocialMeta` ADD FOREIGN KEY (`managerId`) REFERENCES `Manager`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountExtendedProfile` ADD FOREIGN KEY (`accountId`) REFERENCES `Account`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AccountContact` ADD FOREIGN KEY (`profileId`) REFERENCES `AccountExtendedProfile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Accountbusiness` ADD FOREIGN KEY (`profileId`) REFERENCES `AccountExtendedProfile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
