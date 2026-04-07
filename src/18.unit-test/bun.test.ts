import { describe, it, expect } from 'bun:test'
import { Elysia } from 'elysia'

describe('Elysia', () => {
    it('should return Hello World', async () => {
        const app = new Elysia().get('/', 'Hello World')

        const text = await Promise.resolve(app.fetch(new Request('http://localhost/')))
            .then(res => res.text())


        expect(text).toBe('Hello World')
    })
})
