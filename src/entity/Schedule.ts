import { BaseEntity } from 'typeorm'

export class Schedule extends BaseEntity {
	scheduleId: number
	date: string
	rooms: string
	providers: string
	groups: string
	staff: string
	reception: string
	siteCode: string
	createdBy: number
	modifiedBy: number
}
