import User from "src/users/user.entity"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({ type: 'date' })
    birthday: Date

    @Column()
    phone1: number

    @Column({ nullable: true })
    phone2?: number

    @Column()
    address: string

    @Column({ nullable: true })
    favoriteColor: string

    @Column({ type: 'datetime' })
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date

    @ManyToOne(() => User, (user) => user.contacts)
    user: User

}