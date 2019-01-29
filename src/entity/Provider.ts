import { BaseEntity } from 'typeorm'

export class Provider extends BaseEntity {
	providerId: string
	userId: number
	resourceId: number
	siteCode: string
	priorityRating: number
	active: boolean
}
