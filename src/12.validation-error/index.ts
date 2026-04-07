import { Elysia, t, validationDetail } from "elysia";

type ValidationDetail = ReturnType<ReturnType<typeof validationDetail>>;

new Elysia()
  .onError(({ code, error, set, headers }) => {
    if (code === "VALIDATION") {
      set.status = 400;

      const contentType = headers["content-type"];
      const customError = error.customError as ValidationDetail;
      if (contentType !== "application/json") {
        const { value, ...rest } = customError;
        return {
          ...rest,
          message: "Body must be an object",
        };
      }

      // Case 2: (Original) Check for missing required parameters in the object.
      const isMissingParams = customError.value === undefined;
      if (isMissingParams) {
        return error;
      }

      // Case 3: (New) Detect missing required field by comparing expected vs found
      if (customError?.expected && customError?.found) {
        const expectedKeys = Object.keys(customError.expected);
        const foundKeys = Object.keys(customError.found);
        const missingField = expectedKeys.find(
          (key) =>
            !foundKeys.includes(key) ||
            (customError.found as any)[key] === undefined,
        );

        if (missingField) {
          const { value, ...rest } = customError;
          return {
            ...rest,
            message: `Missing required ${missingField}`,
          };
        }
      }

      // Case 4: (Original) Other validation errors
      return error;
    }
  })
  .post("/", ({ body }) => body, {
    body: t.Object(
      {
        age: t.Number({
          error: validationDetail("Age must be a number"),
        }),
      },
      {
        error: validationDetail("Body required"),
      },
    ),
  })
  .listen(3000);
