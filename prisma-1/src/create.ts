import { PrismaClient, userRole } from "@prisma/client";

const prisma = new PrismaClient();

const createMain = async () => {
  // ! create user
  const user = await prisma.user.create({
    data: {
      userName: "user-2",
      email: "user-2@example.com",
      role: userRole.user,
    },
  });
  //! create profile
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "this is user-1 bio...",
  //       userId: 1,
  //     },
  //   });
  //! create Category
  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "DL",
  //     },
  //   });
  // ! create Post

  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "post-1-title",
  //     content: "content of the post",
  //     authoName: "user-1",
  //     authorId: 1,
  //     PostCategory: {
  //       create: {
  //         categoryId: 2,
  //       },
  //     },
  //   },
  //   include: {
  //     PostCategory: true,
  //   },
  // });

  // console.log(createPost);
};

createMain();
