import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function update() {
  //! delete()

  const singleDelete = await prisma.post.delete({
    where: {
      id: 4,
    },
  });

  //! deleteMany()
  const updateMany = await prisma.post.deleteMany({});
}

update();
