import {
	BaseEntity,
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Room } from './Room'
import { Provider } from './Provider'
import { Group } from './Group'
import { User } from './User'
import { Site } from './Site'

@ObjectType()
@Entity()
export class Schedule extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	scheduleId: number

	@Field()
	@Column()
	date: string

	@ManyToOne(() => Room, room => room.roomCode)
	@JoinColumn()
	rooms: [Room]

	@ManyToOne(() => Provider, provider => provider.providerId)
	@JoinColumn()
	@Column()
	providers: string

	@ManyToOne(() => Group, group => group.groupId)
	@JoinColumn()
	@Column()
	groups: string

	@ManyToOne(() => User, user => user.userId)
	@JoinColumn()
	@Column()
	staff: string

	@ManyToOne(() => User, user => user.userId)
	@JoinColumn()
	@Column()
	reception: string

	@ManyToOne(() => Site, site => site.siteCode)
	@JoinColumn()
	@Column({ length: 8 })
	siteCode: string

	@ManyToOne(() => User, user => user.userId)
	@JoinColumn()
	@Column()
	createdBy: number

	@ManyToOne(() => User, user => user.userId)
	@JoinColumn()
	@Column()
	modifiedBy: number
}
