import {
	BaseEntity,
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne
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

	@ManyToOne(() => StatusCode, statusCode => statusCode.statusCode)
	@Column({ length: 8 })
	statusCode: StatusCode

	@Field(() => Room, { nullable: true })
	@Column({ type: 'varchar', nullable: true, length: 10 })
	roomCode: Room

	@Field(() => Site)
	@Column({ type: 'varchar', length: 8 })
	siteCode: Site

	@Field()
	@Column()
	data: string
}
