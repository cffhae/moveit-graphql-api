import { BaseEntity, Entity, PrimaryColumn, Column, OneToMany } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

import { Transaction } from './Transaction'

@ObjectType()
@Entity()
export class StatusCode extends BaseEntity {
	@OneToMany(() => Transaction, transaction => transaction.transactionId)
	@PrimaryColumn({ length: 8 })
	statusCode: string

	@Field()
	@Column({ length: 50 })
	description: string

	@Field()
	@Column()
	triggersRC: boolean

	@Field()
	@Column({ type: 'tinyint' })
	sortOrder: number

	@Field()
	@Column()
	active: boolean
}
