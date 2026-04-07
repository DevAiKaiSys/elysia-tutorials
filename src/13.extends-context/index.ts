import { Elysia, t } from "elysia";

class Logger {
  log(info: string) {
    console.log(info);
  }
}

new Elysia()
  .decorate("logger", new Logger())
  .onRequest(({ request, logger }) => {
    logger.log(`Request to ${request.url}`);
  })
  .guard({
    query: t.Optional(
      t.Object({
        age: t.Number({ min: 15 }),
      }),
    ),
  })
  .resolve(({ query: { age }, status }) => {
    if (!age) return status(401);

    return { age };
  })
  .get("/profile", ({ age }) => age)
  .listen(3000);
