import { Elysia, t } from "elysia";
import { openapi, fromTypes } from "@elysiajs/openapi";

new Elysia()
  .use(
    openapi({
      references: fromTypes(),
    }),
  )
  .model({
    age: t.Object({
      age: t.Number(),
    }),
  })
  .post("/", ({ body }) => body, {
    body: "age",
    detail: {
      summary: "Create a user",
      description: "Create a user with age",
      tags: ["User"],
    },
  })
  .listen(3000);
