import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    @Column()
    age: number

    @Column()
    phone1: number

    @Column({ nullable: true})
    phone2?: number

    @Column()
    address: string

    @Column({ nullable: true})
    favoriteColor: string

    @Column({ type: 'datetime' })
    createdAt: Date

}