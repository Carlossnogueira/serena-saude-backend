-- CreateEnum
CREATE TYPE "public"."FieldName" AS ENUM ('EMAIL', 'PASSWORD', 'NAME', 'BIRTH_DATE');

-- CreateEnum
CREATE TYPE "public"."ProfileChangeStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "public"."ProfileChangeRequets" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fieldName" "public"."FieldName" NOT NULL,
    "oldValue" TEXT NOT NULL,
    "newValue" TEXT NOT NULL,
    "status" "public"."ProfileChangeStatus" NOT NULL DEFAULT 'PENDING',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" INTEGER,

    CONSTRAINT "ProfileChangeRequets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ProfileChangeRequets" ADD CONSTRAINT "ProfileChangeRequets_reviewedBy_fkey" FOREIGN KEY ("reviewedBy") REFERENCES "public"."Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProfileChangeRequets" ADD CONSTRAINT "ProfileChangeRequets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
