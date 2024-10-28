import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  // ! create a document
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Second-post",
  //       content: "Second content",
  //       authoName: "Alice-1",
  //       authorId: 213,
  //     },
  //   });
  //! findall document - findMany().
  //   const result = await prisma.post.findMany({});
  //!     FindFirst - find a single document.

  //   const result = await prisma.post.findFirst({
  //     where: {
  //       published: false,
  //     },
  //   });

  // ! find First with error.
  //   const result = await prisma.post.findFirstOrThrow({
  //     where: {
  //       published: true,
  //     },
  //   });

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
  const findUniqueAndThrowError = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });

  console.log(findUnique);
}

main();
