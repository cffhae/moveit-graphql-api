import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import bcrypt from 'bcryptjs'

import { User } from '../../entity/User'
import { UserInput } from './create/UserInput'

@Resolver()
export class UserResolver {
	@Query()
	async hello() {
		return 'Hello World'
	}

	@Mutation(() => String)
	async createUser(@Arg('data')
	{
		userId,
		firstName,
		lastName,
		pinCode,
		roleCode,
		sites,
		forceReset
	}: UserInput): Promise<User> {
		const generatedSalt = await bcrypt.genSalt()
		const hashedPinCode = await bcrypt.hash(pinCode, generatedSalt)

		const user = await User.create({
			userId,
			firstName,
			lastName,
			pinCode: hashedPinCode,
			salt: generatedSalt,
			roleCode,
			sites,
			forceReset,
			active: true
		}).save()

		return user
	}
}
