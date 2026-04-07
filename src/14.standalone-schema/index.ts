import { Elysia, t } from "elysia";
import { z } from "zod";

new Elysia()
  .guard({
    schema: "standalone",
    body: z.object({
      age: z.number().min(15),
    }),
  })
  .post("/user", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  })
  .listen(3000);
