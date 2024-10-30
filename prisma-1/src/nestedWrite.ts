import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const nestedWrites = async () => {
  //! create user as well as a post.
  //   const createUser_Post = await prisma.user.create({
  //     data: {
  //       userName: "New user",
  //       email: "new@example.com",
  //       age: 30,
  //       posts: {
  //         create: {
  //           title: "Post-1",
  //           content: "post-1 content",
  //         },
  //       },
  //     },
  //   });
  //   console.log(createUser_Post);

  const modifyPost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      authoName: "new_user",
    },
  });

  console.log(modifyPost);
};

nestedWrites();
