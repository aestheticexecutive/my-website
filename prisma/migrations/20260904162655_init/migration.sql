-- CreateTable
CREATE TABLE "MemberToolData" (
    "userId" TEXT NOT NULL,
    "toolKey" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MemberToolData_pkey" PRIMARY KEY ("userId","toolKey")
);
