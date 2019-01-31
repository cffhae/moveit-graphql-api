import { BaseEntity, Entity, OneToMany, PrimaryColumn, Column } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { Transaction } from './Transaction'

@ObjectType()
@Entity()
export class Site extends BaseEntity {
	@OneToMany(() => Transaction, transaction => transaction.transactionId)
	@PrimaryColumn({ length: 8 })
	siteCode: string

	@Field()
	@Column()
	longCode: string

	@Column()
	dbCode: string

	@Field()
	@Column()
	active: boolean
}
