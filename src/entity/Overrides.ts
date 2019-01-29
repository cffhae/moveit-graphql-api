import { BaseEntity } from 'typeorm'

export class Override extends BaseEntity {
	overrideId: number
	appointmentId: number
	approvedBy: number
	timestamp: string
	siteCode: string
	comment: string
}
