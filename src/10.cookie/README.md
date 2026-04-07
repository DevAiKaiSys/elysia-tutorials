# 🍪 Cookie Management in Elysia

Learn how to handle cookies effectively with Elysia's reactive cookie API.

## ✅ Features
- Accessing and modifying cookies
- Reactive cookie updates
- Cookie type validation with `t.Cookie`
- **Signed Cookies** using a `secret` for enhanced security

## 🛡️ Cookie Secrets & Signing
A **Cookie Secret** is used to cryptographically sign cookies. This ensures that the cookie value cannot be tampered with by the user. If the user modifies a signed cookie in their browser, Elysia will detect the signature mismatch and treat the cookie as invalid (or empty).

To use secrets:
1. Provide a `secret` in the Elysia constructor.
2. Use `t.Cookie` in the route schema and specify `secrets` (plural) and the cookies to `sign`.

```typescript
new Elysia({
    cookie: {
        secret: 'your-secret'
    }
})
.get('/', ({ cookie: { visit } }) => {
    // ...
}, {
    cookie: t.Cookie({
        visit: t.Optional(t.Number())
    }, {
        secrets: 'your-secret',
        sign: ['visit']
    })
})
```

## 🚀 How to Run

```bash
# Start the development server
bun run --watch src/10.cookie/index.ts
```

## 📍 Endpoints
- `GET /`: Increments the `visit` counter (signed cookie).
- `GET /clear`: Removes the `visit` cookie.
