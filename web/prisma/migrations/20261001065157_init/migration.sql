-- CreateTable
CREATE TABLE "MosqueSettings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT 'Masjid At Taubah',
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "iqamahIntervals" TEXT NOT NULL,
    "whatsappNumber" TEXT
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "speaker" TEXT,
    "date" DATETIME NOT NULL,
    "startTime" TEXT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'Ruang Utama Masjid',
    "description" TEXT,
    "publishToWeb" BOOLEAN NOT NULL DEFAULT true,
    "publishToTv" BOOLEAN NOT NULL DEFAULT true,
    "publishToWa" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'PUBLISHED'
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "validUntil" DATETIME NOT NULL,
    "publishToWeb" BOOLEAN NOT NULL DEFAULT true,
    "publishToTv" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "DonationCampaign" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "targetAmount" REAL NOT NULL,
    "collectedAmount" REAL NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE'
);

-- CreateTable
CREATE TABLE "ServiceRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serviceType" TEXT NOT NULL,
    "submitterName" TEXT NOT NULL,
    "whatsappNumber" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'CONTENT_ADMIN'
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
