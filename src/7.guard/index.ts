import { Elysia, t } from "elysia";
new Elysia()
  /* .onBeforeHandle(({ query: { name }, status }) => { 
		if(!name) return status(401) 
	}) 
	.onBeforeHandle(({ query: { name } }) => { 
		console.log(name) 
	}) 
	.onAfterResponse(({ responseValue }) => { 
		console.log(responseValue) 
	}) */
  .guard({
    beforeHandle: [
      ({ query: { name }, status }) => {
        if (!name) return status(401);
      },
      ({ query: { name } }) => {
        console.log(name);
      },
    ],
    afterResponse({ responseValue }) {
      console.log(responseValue);
    },
    query: t.Object({
      name: t.String(),
    }),
  })
  .get("/auth", ({ query: { name = "anon" } }) => `Hello ${name}!`, {
    /* query: t.Object({
      name: t.String(),
    }), */
  })
  .get("/profile", ({ query: { name = "anon" } }) => `Hello ${name}!`, {
    /* query: t.Object({
      name: t.String(),
    }), */
  })
  .listen(3000);
