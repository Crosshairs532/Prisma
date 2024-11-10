import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const createUser = async () => {
  const userCreated = await prisma.user.create({
    data: {
      name: "John Doe3",
      email: "elsa@prisma4.io",
      age: 20,
    },
  });

  console.log(userCreated);
};

const createPost = async () => {
  const postCreated = await prisma.post.create({
    data: {
      title: "post cat dog",
      authorId: 1,
      published: false,
      views: 10,
    },
  });

  console.log(postCreated);
};

// createUser();
createPost();
