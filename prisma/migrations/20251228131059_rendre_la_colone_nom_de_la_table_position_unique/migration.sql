/*
  Warnings:

  - A unique constraint covering the columns `[nom]` on the table `Position` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Position_nom_key" ON "Position"("nom");
