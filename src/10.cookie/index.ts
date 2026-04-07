import { Elysia, t } from "elysia";

new Elysia({
  cookie: {
    secret: "Fischl von Luftschloss Narfidort",
  },
})
  .get(
    "/",
    ({ cookie: { visit } }) => {
      visit.value ??= 0;
      visit.value++;

      visit.httpOnly = true;

      return `You have visited ${visit.value} times`;
    },
    {
      cookie: t.Cookie(
        {
          visit: t.Optional(t.Number()),
        },
        {
          secrets: "Fischl von Luftschloss Narfidort",
          sign: ["visit"],
        },
      ),
    },
  )
  .get("/clear", ({ cookie: { visit } }) => {
    visit.remove();
    return `Cookie removed`;
  })
  .listen(3000);
