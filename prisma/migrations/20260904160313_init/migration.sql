-- CreateTable
CREATE TABLE "MemberToolData" (
    "userId" TEXT NOT NULL,
    "toolKey" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("userId", "toolKey")
);
