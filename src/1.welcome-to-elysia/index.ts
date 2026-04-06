import { Elysia } from 'elysia'
new Elysia()
	// .get('/', 'Hello World!')
	.get('/', 'Hello Elysia!')
	.listen(3000)