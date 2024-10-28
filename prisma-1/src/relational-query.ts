import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  //! fluent api

  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //     })
  //     .posts();

  //! relational filters;
  //   const result = await prisma.user.findMany({
  //     include: {
  //       posts: {
  //         where: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });

  //! conditional filtering
  const result = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: false,
        },
      ],
    },
  });
  console.dir(result, { depth: Infinity });
};

relationalQuery();
