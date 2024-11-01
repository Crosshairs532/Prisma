import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const createUser = async () => {
  const userCreated = await prisma.user.create({
    data: {
      name: "John Doe3",
      email: "elsa@prisma3.io",
      posts: {
        connect: [{ id: 1 }],
      },
    },
  });

  console.log(userCreated);
};

const createPost = async () => {
  const postCreated = await prisma.post.create({
    data: {
      title: "post-6",
      authorId: 2,
      published: false,
      views: 10,
    },
  });

  console.log(postCreated);
};

createUser();
// createPost();
