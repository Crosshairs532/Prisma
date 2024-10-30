import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Interactive_Transaction = async () => {
  try {
    const result = prisma.$transaction(async (transactionClient) => {
      //* Create a new user.

      const createUser = await transactionClient.user.create({
        data: {
          userName: "jahin",
          email: "jahin@gamil.com",
        },
      });

      //* update user
      const updateUser = await transactionClient.user.update({
        where: {
          id: 6,
        },
        data: {
          email: "Tanzim-2@example.com",
        },
      });
      //* count number of user
      const countUser = await transactionClient.user.count();
      return {
        createUser,
        updateUser,
        countUser,
      };
    });
  } catch (error: any) {
    console.log(error?.message);
  }
};

Interactive_Transaction();
