# [Prisma](https://www.prisma.io/docs/orm/reference/prisma-client-reference)

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
- upsert()

### Delete

- delete()
- deleteMany()
- $transaction - this is used to handle multiple promise at a time.

### Select

- selects the field that i want to show in the result. in `MYSQL, PostgreSQL` it the field that we write after select statement. `select filed-1, field-2  from  tableName`.

## Relations

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

#### To-many

- some
- every
- none

#### -to-one

- is
- isNot

### 4-5. Pagination and sorting and filtering

- skip
- take
- Cursor based pagination
- orderby (sorting)
- NOT , OR
- Null
- not Null => { not : null }
- has
- \_relevance

## 6. Aggregation, grouping and summarizing

- \_avg
- \_sum
- groupBy + where + having
- \_min
- \_max
- \_count
- count()
- \_all

## full text search ( this is in preview mode )

- \_search
- \_relevance ( finding relevance content)
- @@fulltext([filed_name])
- @@fulltext([filed_name, field_name])
  `generator client {
  provider = "prisma-client-js"
  previewFeatures = ["fullTextSearch", "fullTextIndex"]
  }`

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

### Logging :this is useful when we want to see the information of the query we made.

      `const prisma = new PrismaClient({
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

### Aggregation, Grouping and Summarization .

### Transaction and Batch Queries.

> Three Way for transaction

    - nested Writes
    - Batch/ bulk Operation
        - deleteMany()
        - updateMany()
        - createMany()
        - createManyAndReturn()
    - using transaction API
        - Sequential Operations
        - Interactive Operations.
            - two param
                - async function => that hold the main logic
                - transaction options.

### Raw Queries.

- $queryRaw

### Essential Commands

- `npx prisma migrate dev` => to generate prisma client as well as migration happens.
- `npx prisma generate` => to generate prisma client
- `npx prisma validate`=> check is the schema is valid.
- `npx prisma format`
- `npx prisma db  pull --print`=> check if the migrated schema and prisma schema are same.
- `npx prisma db  pull` => i want to pull the db schema to prisma schema.
- `npx prisma db push`
- `npx prisma` => to see all the available commands like above.
