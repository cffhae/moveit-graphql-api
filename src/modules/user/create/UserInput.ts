import { InputType, Field } from 'type-graphql'
import { IsUserIdUnique } from './isUserIdUnique'

@InputType()
export class UserInput {
	@Field()
	@IsUserIdUnique({ message: 'User ID already taken' })
	userId: number

	@Field()
	firstName: string

	@Field()
	lastName: string

	@Field()
	pinCode: string

	@Field()
	roleCode: string

	@Field()
	sites: string

	@Field()
	forceReset: boolean
}
