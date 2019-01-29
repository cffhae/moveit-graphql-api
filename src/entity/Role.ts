import { ObjectType, Field } from 'type-graphql'
import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm'

@ObjectType()
@Entity()
export class Role extends BaseEntity {
	@Field()
	@PrimaryColumn()
	roleCode: string

	@Field()
	@Column()
	description: string

	@Field()
	@Column()
	override_allowed: boolean

	@Field()
	@Column()
	active: boolean
}
