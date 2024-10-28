# Prisma

#### Prisma ORM

it consists of three parts:

- **Prisma Client**: This is the core of Prisma. It's a TypeScript/JavaScript.this Ensure the proper types and all the query happens with this.
- **Prisma Migrate**: This is a tool that helps you manage your database schema. `prisma migrate dev`
- **Prisma Studio**: GUI to view and edit data in your database.

### Create

- create()
- createMany()

### Read

- findUnique()
- finsUniqueOrThrow()
- findMany()
- findFirst()
- findFirstOrThrow()

### Update

- update()
- updateMany()

### Delete

- delete()
- deleteMany()
- $transaction - this is used to handle multiple promise at a time.

### upsert => update or create

### Select

- selects the field that i want to show in the result. in `MYSQL, PostgreSQL` it the field that we write after select statement. `select filed-1, field-2  from  tableName`.

### Pagination and sorting

- skip
- take
- orderby (sorting)

### relations( @relation)

### One to one relations

- @relation(fields: [current model foreing key], references: [primary key of other table])

### One to many relations

- author User @relation(fields: [authorId], references: [id])

### many to many :(@@id)

- make composite primary key using `@@id`

## relational Queries

    ### Fluent Api
        - `const postsByUser: Post[] = await prisma.user
          .findUnique({ where: { email: 'alice@prisma.io' } })
          .posts()`

## relational filters

### partial search

- `contains`
  const result = await prisma.user.findMany({
  where: {
  userName: {
  contains: "title",
  },
  },
  });

### Conditional filter (AND, OR NOT)

- AND
- OR
- NOT

### [Operator](https://www.prisma.io/docs/orm/reference/prisma-client-reference#filter-conditions-and-operators)

- startWith
- endsWith
- contains
- equals
- in
-
-

### Logging

- this is useful when we want to see the information of the query we made.
- `const prisma = new PrismaClient({
  log: [
  {
  emit: "event",
  level: "query",
  },
  ],
  });

prisma.$on("query", (e) => {
console.log(e.duration);
console.log(e.query);
});`
