import { describe, it, expect, test } from '@jest/globals'
import { Elysia } from 'elysia'

describe('Elysia', () => {
    test('should return Hello World', async () => {
        const app = new Elysia().get('/', 'Hello World')

        const text = await Promise.resolve(app.fetch(new Request('http://localhost/')))
            .then(res => res.text())

        expect(text).toBe('Hello World')
    })
})
