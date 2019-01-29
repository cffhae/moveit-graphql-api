import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import 'reflect-metadata'
import { buildSchema, formatArgumentValidationError } from 'type-graphql'
import { createConnection } from 'typeorm'

import { UserResolver } from './modules/user/UserResolver'

const main = async () => {
	await createConnection()

	const schema = await buildSchema({
		resolvers: [UserResolver]
	})

	const apolloServer = new ApolloServer({
		schema,
		formatError: formatArgumentValidationError
	})

	const app = Express()

	apolloServer.applyMiddleware({ app })

	app.listen(4000, () => {
		console.log('Server Running on http://localhost:4000/graphql')
	})
}

main()
