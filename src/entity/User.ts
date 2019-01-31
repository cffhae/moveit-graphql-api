import { Entity, PrimaryColumn, BaseEntity, Column } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@PrimaryColumn({ type: 'smallint' })
	userId: number

	@Field()
	@Column({ length: 50 })
	firstName: string

	@Field()
	@Column({ length: 50 })
	lastName: string

	@Column()
	pinCode: string

	@Column()
	salt: string

	@Field()
	@Column({ length: 15 })
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
