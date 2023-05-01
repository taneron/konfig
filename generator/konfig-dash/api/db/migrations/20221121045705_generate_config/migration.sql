-- CreateTable
CREATE TABLE "GenerateConfig" (
    "id" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "konfigyaml" TEXT NOT NULL,
    "spaceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GenerateConfig_pkey" PRIMARY KEY ("id")
);


insert into "GenerateConfig"("id", "updated", "konfigyaml", "spaceId", "userId")
  select 'dummy', CURRENT_TIMESTAMP, 'dummy', "Space".id, "User".id
  from "Space" join "User" on "Space".id = "User"."currentSpaceId" limit 1;

-- AddForeignKey
ALTER TABLE "GenerateConfig" ADD CONSTRAINT "GenerateConfig_spaceId_fkey" FOREIGN KEY ("spaceId") REFERENCES "Space"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerateConfig" ADD CONSTRAINT "GenerateConfig_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
