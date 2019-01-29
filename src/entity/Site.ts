import { BaseEntity } from 'typeorm'

export class Site extends BaseEntity {
	siteCode: string
	longCode: string
	dbCode: string
	active: boolean
}
