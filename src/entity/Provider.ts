import { BaseEntity, Entity, OneToMany, ManyToOne, Column } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Schedule } from './Schedule'
import { User } from './User'
import { Site } from './Site'

@ObjectType()
@Entity()
export class Provider extends BaseEntity {
	@OneToMany(() => Schedule, schedule => schedule.providers)
	providerId: string

	@ManyToOne(() => User, user => user.userId)
	users: number

	@Field()
	@Column()
	resources: number

	@ManyToOne(() => Site, site => site.siteCode)
	siteCode: string

	@Field()
	@Column()
	priorityRating: number

	@Field()
	@Column()
	active: boolean
}
