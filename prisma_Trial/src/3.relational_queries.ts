import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //! some => ektao jodi true hoy shob dibe
  //! every => oishob user dibe jar shob post unpublished
  //! none =>

  //   const result = await prisma.user.findMany({
  //     where: {
  //       posts: {
  //         some: {
  //           published: true,
  //         },
  //       },
  //     },
  //     include: {
  //       posts: {
  //         select: {
  //           title: true,
  //           id: true,
  //         },
  //       },
  //     },
  //   });
  const result = await prisma.user.findMany({
    where: {
      posts: {
        none: {
          published: false,
        },
      },
    },
    include: {
      posts: {
        select: {
          title: true,
          id: true,
        },
      },
    },
  });

  //!  is, isNot => eta / etana but eta.

  console.dir(result, { depth: "infinity" });
};

relationalQueries();
