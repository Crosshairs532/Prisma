import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const result = await prisma.$queryRaw`TRUNCATE table "users" CASCADE`;

  console.log(result);
};

rawQuery();
