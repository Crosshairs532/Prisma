import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function update() {
  //! update()

  const singleUpdate = await prisma.post.update({
    where: {
      id: 4,
    },
    data: {
      title: "4th-post",
    },
  });

  //! updateMany()
  const updateMany = await prisma.post.updateMany({
    where: {
      authoName: "Alice-1",
    },
    data: {
      published: true,
    },
  });

  console.log(updateMany);
}

update();
