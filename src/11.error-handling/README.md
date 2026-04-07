# ⚠️ Error Handling in Elysia

Learn how to manage errors effectively using Elysia's custom error mapping and the `onError` lifecycle hook.

## ✅ Features
- **Custom Error Classes**: Define your own errors with specific status codes.
- **Error Mapping**: Map custom errors to specific codes using `.error()`.
- **Global Error Handler**: Use `.onError()` to catch and transform errors before they reach the client.

## 🛡️ Error Examples in this Tutorial
1. **Custom Error (`YourError`)**: Throws a `418 I'm a teapot` status code when visiting `/`.
2. **Not Found Handling**: The `.onError` hook specifically catches `NOT_FOUND` (404) and returns a friendly "Hi there" message.

## 🚀 How to Run

```bash
# Start the development server
bun run --watch src/11.error-handling/index.ts
```

## 📍 Endpoints
- `GET /`: Throws a custom error (418 status).
- `GET /any-missing-route`: Triggers the `NOT_FOUND` handler in `onError`.
