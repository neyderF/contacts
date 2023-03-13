import { Contact } from '../contacts/contact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ unique: true })
    public username: string;

    @Column()
    public password: string;

    @OneToMany(() => Contact, (contact) => contact.user, { nullable: false })
    contacts: Contact[]
}

export default User;