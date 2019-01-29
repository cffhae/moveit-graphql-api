import { BaseEntity } from 'typeorm'

export class StatusCode extends BaseEntity {
	statusCode: string
	description: string
	triggersRC: boolean
	sortOrder: number
	active: boolean
}
