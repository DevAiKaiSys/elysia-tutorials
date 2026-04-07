import { Elysia, t } from 'elysia'

new Elysia()
	.post(
		'/user',
		({ body: { name } }) => `Hello ${name}!`,
		{
			body: t.Object({
				name: t.String()
			})
		}
	)
	.listen(3000)