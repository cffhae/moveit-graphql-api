import {
	BaseEntity,
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany
} from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { StatusCode } from './StatusCode'
import { Room } from './Room'
import { Site } from './Site'

@ObjectType()
@Entity()
export class Transaction extends BaseEntity {
	@Field()
	@PrimaryGeneratedColumn()
	readonly transactionId: number

	@Field()
	@Column()
	appointmentId: number

	@Field()
	@Column({ type: 'datetime' })
	timestamp: string

	@OneToMany(() => StatusCode, statusCode => statusCode.statusCode)
	@Column()
	statusCode: StatusCode

	@Field(() => Room, { nullable: true })
	@Column({ nullable: true })
	roomCode: Room

	@Field(() => Site)
	@Column({ length: 8 })
	siteCode: Site

	@Field()
	@Column()
	data: string
}
