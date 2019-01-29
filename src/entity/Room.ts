import { BaseEntity } from 'typeorm'

export class Room extends BaseEntity {
	roomCode: string
	siteCode: string
	label: string
	exclusive: boolean
	sortOrder: number
	active: boolean
}
