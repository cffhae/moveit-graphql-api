import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	OneToMany,
	Column,
	ManyToMany
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Provider } from './Provider'
import { Site } from './Site'

@ObjectType()
@Entity()
export class Group extends BaseEntity {
	@PrimaryGeneratedColumn()
	groupId: number

	@Field()
	@Column()
	resourceId: number

	@ManyToMany(() => Provider, provider => provider.providerId)
	providers: string

	@Field()
	@Column({ type: 'tinyint' })
	priorityRating: number

	@OneToMany(() => Site, site => site.siteCode)
	siteCode: string

	@Field()
	@Column()
	active: boolean
}
