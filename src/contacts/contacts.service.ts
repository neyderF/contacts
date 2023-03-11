import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/contact.dto';

@Injectable()
export class ContactsService {

    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) {

    }

    getAllContacts() {

        return { 'hola': 'bien' }
    }
    getContactById(id: number) {

    }
    createContact(newContact: CreateContactDto) {

        const tmpContact = this.contactRepository.create(newContact)

        return  this.contactRepository.save(tmpContact)
    }
    updateContact() { }

    deleteContact(id: number) {

        return { 'eliminado': 'ee' }
    }

}
