-- CreateTable
CREATE TABLE "log" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("id")
);
