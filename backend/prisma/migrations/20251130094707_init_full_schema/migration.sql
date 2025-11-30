/*
  Warnings:

  - You are about to drop the column `lvlExp` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lvlExpToNext` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `lvlValue` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `_AchievementToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AchievementToUser" DROP CONSTRAINT "_AchievementToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_AchievementToUser" DROP CONSTRAINT "_AchievementToUser_B_fkey";

-- AlterTable
ALTER TABLE "Achievements" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "lvlExp",
DROP COLUMN "lvlExpToNext",
DROP COLUMN "lvlValue",
ADD COLUMN     "img" TEXT,
ADD COLUMN     "lvl" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "rating" TEXT NOT NULL DEFAULT '0';

-- DropTable
DROP TABLE "_AchievementToUser";

-- CreateTable
CREATE TABLE "BestInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BestInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserActiveAchievements" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserActiveAchievements_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_UserAchievements" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserAchievements_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserActiveAchievements_B_index" ON "_UserActiveAchievements"("B");

-- CreateIndex
CREATE INDEX "_UserAchievements_B_index" ON "_UserAchievements"("B");

-- AddForeignKey
ALTER TABLE "BestInfo" ADD CONSTRAINT "BestInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserActiveAchievements" ADD CONSTRAINT "_UserActiveAchievements_A_fkey" FOREIGN KEY ("A") REFERENCES "Achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserActiveAchievements" ADD CONSTRAINT "_UserActiveAchievements_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAchievements" ADD CONSTRAINT "_UserAchievements_A_fkey" FOREIGN KEY ("A") REFERENCES "Achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserAchievements" ADD CONSTRAINT "_UserAchievements_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
