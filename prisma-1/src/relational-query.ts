import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  //! fluent api

  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .posts();
  console.log(result);
};

relationalQuery();
