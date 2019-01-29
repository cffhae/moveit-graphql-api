import { BaseEntity } from 'typeorm'

export class Group extends BaseEntity {
	groupId: number
	resourceId: number
	providers: string
	priorityRating: number
	siteCode: string
	active: boolean
}
