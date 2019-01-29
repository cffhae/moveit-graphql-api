import { Entity, PrimaryColumn, BaseEntity, Column } from 'typeorm'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(() => ID)
	@PrimaryColumn()
	userId: number

	@Field()
	@Column()
	firstName: string

	@Field()
	@Column()
	lastName: string

	@Column()
	pinCode: string

	@Column()
	salt: string

	@Field()
	@Column()
	roleCode: string

	@Field()
	@Column()
	sites: string

	@Field()
	@Column()
	forceReset: boolean

	@Field()
	@Column()
	active: boolean
}
