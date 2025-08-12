-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('SCHEDULED', 'COMPLETED', 'CANCELED', 'RESCHEDULED');

-- CreateTable
CREATE TABLE "public"."Appointments" (
    "id" SERIAL NOT NULL,
    "patientId" INTEGER NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Appointments" ADD CONSTRAINT "Appointments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appointments" ADD CONSTRAINT "Appointments_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
