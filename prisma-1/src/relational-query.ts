import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e.duration);
  console.log(e.query);
});

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
  //   const result = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "title",
  //           },

  //         },
  //         {
  //           published: false,
  //         },
  //       ],
  //     },
  //   });

  //   const result = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: ".com",
  //       },
  //     },
  //   });

  // ! operator - in
  const result = await prisma.user.findMany({
    where: {
      userName: {
        in: ["user-1"],
      },
    },
  });
  console.dir(result, { depth: Infinity });
};

relationalQuery();
