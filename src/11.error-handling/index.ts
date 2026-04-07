import { Elysia } from "elysia";

class YourError extends Error {
  status = 418;

  constructor(message: string) {
    super(message);
  }
}

new Elysia()
  .error({
    YOUR_ERROR: YourError,
  })
  .onError(({ code, status }) => {
    if (code === "NOT_FOUND") return "Hi there";
  })
  .get("/", () => {
    throw new YourError("A");
  })
  .listen(3000);
