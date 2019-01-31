import {
	BaseEntity,
	Entity,
	PrimaryColumn,
	OneToMany,
	ManyToOne,
	Column
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Schedule } from './Schedule'
import { Site } from './Site'

@ObjectType()
@Entity()
export class Room extends BaseEntity {
	@OneToMany(() => Schedule, schedule => schedule.rooms)
	@PrimaryColumn()
	roomCode: string

	@ManyToOne(() => Site, site => site.siteCode)
	siteCode: string

	@Field()
	@Column()
	label: string

	@Field()
	@Column()
	exclusive: boolean

	@Field()
	@Column({ type: 'tinyint' })
	sortOrder: number

	@Field()
	@Column()
	active: boolean
}
