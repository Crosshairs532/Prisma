import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Batch_Transaction = async () => {
  const createUser = prisma.user.create({
    data: {
      userName: "Tanzim",
      email: "tanzim@gmail.com",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 6,
    },
    data: {
      userName: "Tanzim-2",
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};
Batch_Transaction();
