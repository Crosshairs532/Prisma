import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  //! findMany document - findMany().
  const findMany = await prisma.post.findMany({});

  //!     FindFirst - find a single document.
  const findFirst = await prisma.post.findFirst({
    where: {
      published: false,
    },
  });

  // ! find First with error.
  const findFirstOrThrow = await prisma.post.findFirstOrThrow({
    where: {
      published: true,
    },
  });

  //!find unique
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 2,
    },
    select: {
      title: true,
      content: true,
    },
  });

  //!findUniqueOrThrow
  const findUniqueAndThrowError = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });

  //! pagination and sorting
  const pagination = await prisma.post.findMany({
    skip: 1,
    take: 2,
    cursor: {
      id: 2,
    },
    orderBy: {
      id: "asc",
    },
  });

  console.log(pagination);
}

main();
