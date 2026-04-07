import { Elysia, t } from 'elysia'

new Elysia()
	.get('/', ({ cookie: { visit } }) => {
		visit.value ??= 0
		visit.value++

		visit.httpOnly = true

		return `You have visited ${visit.value} times`
	}, {
		cookie: t.Object({
			visit: t.Optional(
				t.Number()
			)
		})
	})
	.listen(3000)