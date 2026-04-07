import { Elysia } from "elysia";

const app = new Elysia().get("/", "Hello World").listen(3000);

Promise.resolve(app.fetch(new Request("http://localhost/")))
  .then((res) => res.text())
  .then(console.log);
