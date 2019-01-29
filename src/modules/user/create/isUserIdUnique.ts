import {
	registerDecorator,
	ValidationOptions,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator'

import { User } from '../../../entity/User'

@ValidatorConstraint({ async: true })
export class IsUserIdUniqueConstraint implements ValidatorConstraintInterface {
	validate(userId: number) {
		return User.findOne({ where: { userId } }).then(user => {
			if (user) return false
			return true
		})
	}
}

export function IsUserIdUnique(validationOptions?: ValidationOptions) {
	return function(object: object, propertyName: string) {
		registerDecorator({
			target: object.constructor,
			propertyName,
			options: validationOptions,
			constraints: [],
			validator: IsUserIdUniqueConstraint
		})
	}
}
