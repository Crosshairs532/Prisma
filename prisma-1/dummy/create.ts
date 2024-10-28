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

  // ! create multiple document  => createMany()

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Third-post",
        content: "Third content",
        authoName: "Alice-3rd",
        authorId: 214,
      },

      {
        title: "4th-post",
        content: "4th content",
        authoName: "Alice-4th",
        authorId: 215,
      },
    ],
  });

  console.log(createMany);
}

main();
