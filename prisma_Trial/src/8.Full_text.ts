import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const fullTextSearch = async () => {
  const res = await prisma.post.findMany({
    orderBy: {
      _relevance: {
        fields: ["title"],
        search: "cat & dog",
        sort: "asc",
      },
    },
  });

  console.log(res);
};
fullTextSearch();
