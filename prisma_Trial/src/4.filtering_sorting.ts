import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const filter_sort = async () => {
  //   const result = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: ".io",
  //       },
  //       posts: {
  //         some: {
  //           published: true,
  //         },
  //       },
  //     },
  //     include: {
  //       posts: {
  //         where: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });

  //! Not , Or

  //   const result = await prisma.user.findMany({
  //     where: {
  //       OR: [
  //         {
  //           email: {
  //             endsWith: ".io",
  //           },
  //         },
  //         {
  //           email: {
  //             contains: "prisma1",
  //           },
  //         },
  //       ],
  //       NOT: {
  //         email: {
  //           contains: "prisma2",
  //         },
  //       },
  //     },
  //     select: {
  //       id: true,
  //       name: true,
  //       email: true,
  //     },
  //   });

  //! filter on relation
  //   const result = await prisma.user.findMany({
  //     where: {
  //       posts: {
  //         some: {
  //           views: {
  //             gte: 10,
  //           },
  //         },
  //       },
  //     },
  //   });

  // ! Sorting
  //   const result = await prisma.post.findMany({
  //     orderBy: {
  //       views: "desc",
  //     },
  //     select: {
  //       id: true,
  //       title: true,
  //       views: true,
  //     },

  //!relevance

  //   const result = await prisma.user.findMany({
  //     orderBy: {
  //       _relevance: {
  //         fields: ["name"],
  //         search: "John",
  //         sort: "asc",
  //       },
  //     },
  //   });

  //   const result = await prisma.user.count({
  //     select: {
  //       _all: true,
  //       name: true,
  //     },
  //   });
  const result = await prisma.user.aggregate({
    _count: {
      name: true,
    },
  });
  console.dir(result, { depth: "infinity" });
};
filter_sort();

// # Filter And sorting
// * NOT , OR
// * Null =>
// * not Null => { not : null }
// * has
// * _relevance
