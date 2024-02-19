-- CreateTable
CREATE TABLE `Word` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(191) NOT NULL,
    `translationId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EnglishTranslation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `word` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Word` ADD CONSTRAINT `Word_translationId_fkey` FOREIGN KEY (`translationId`) REFERENCES `EnglishTranslation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
