import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const selectFields = async () => {
  //   const getUser = await prisma.user.findUnique({
  //     where: {
  //       id: 2,
  //     },
  //     // include: {
  //     //   posts: true,
  //     // },
  //     // posts: {
  //     //     select: {
  //     //       title: true,
  //     //     },
  //     //   },
  //     select: {
  //       name: true,
  //       email: true,
  //       //   _count: {
  //       //     select: {
  //       //       posts: true,
  //       //     },
  //       //   },
  //       //   posts: {
  //       //     where: {
  //       //       published: false,
  //       //     },
  //       //     orderBy: {
  //       //       //   title: "desc",
  //       //       views: "desc",
  //       //     },
  //       //     select: {
  //       //       id: true,
  //       //       title: true,
  //       //       views: true,
  //       //     },
  //       //   },
  //       posts: {
  //         select: {
  //           id: true,
  //           title: true,
  //         },
  //       },
  //     },
  //   });

  const users = await prisma.user
    .findUnique({
      where: {
        id: 2,
      },
    })
    .posts();

  console.log(users, "=>");
};

selectFields();
