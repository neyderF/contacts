import { Contact } from 'src/contacts/contact.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ unique: true })
    public username: string;

    @Column()
    public password: string;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[]
}

export default User;