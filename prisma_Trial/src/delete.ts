import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deletePosts = async () => {
  const deletedPosts = await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      posts: {
        deleteMany: [{ id: 2 }],
      },
    },
  });

  console.log(deletedPosts);
};

deletePosts();
