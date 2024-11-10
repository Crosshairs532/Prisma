import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregation_grouping_summarization = async () => {
  // _avg: {
  //     age: true,
  //   },
  //   const aggregations = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //     where: {
  //       OR: [
  //         {
  //           email: {
  //             contains: "prisma2",
  //           },
  //         },
  //         {
  //           email: {
  //             contains: "prisma4",
  //           },
  //         },
  //       ],
  //       email: {
  //         mode: "insensitive",
  //       },
  //     },
  //     orderBy: {
  //       age: "asc",
  //     },
  //   });
  //! count
  //   const userCount = await prisma.user.count()
  //! _count()
  //   const userCount = await prisma.user.aggregate({
  //     _count: {
  //       id: true,
  //     },
  //   });

  //   const postCount = await prisma.user.findMany({
  //     select: {
  //       id: true,
  //       _count: {
  //         select: {
  //           posts: true,
  //         },
  //       },
  //     },
  //   });

  const userCount = await prisma.user.count({
    select: {
      _all: true,
      name: true,
    },
  });

  console.log(userCount);
};
aggregation_grouping_summarization();
