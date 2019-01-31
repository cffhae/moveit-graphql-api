import { BaseEntity, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Schedule } from './Schedule'
import { User } from './User'

@Entity()
export class ScheduleStaff extends BaseEntity {
	@PrimaryGeneratedColumn()
	scheduleStaffId: number

	@ManyToOne(() => Schedule, schedule => schedule.scheduleId)
	scheduleId: number

	@ManyToOne(() => User, user => user.userId)
	userId: number
}
