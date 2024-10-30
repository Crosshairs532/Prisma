import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregate = async () => {
  const aggregations_average = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  //   console.log("Average age:" + aggregations._avg.age);

  const aggregations_sum = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // this is the only field where we can use others field to count.
  const aggregations_count = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  // number of users.
  const countWhole = await prisma.user.count();
  const aggregations_maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  const aggregations_minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
};

aggregate();
