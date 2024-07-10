-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT,
    "spec" TEXT,
    "mainImg" TEXT,
    "img1" TEXT,
    "img2" TEXT,
    "img3" TEXT,
    "img4" TEXT
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);
