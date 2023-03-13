import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactsService {

    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>, private usersService: UsersService) {

    }

    async getAllContactsByUser(userId: number) {

        let contacts = await this.contactRepository.find({
            where: {
                user: {
                    id: userId
                }
            },
        })
        return contacts
    }

    async getContactById(id: number, ownerId: number) {

        let tmpContact = await this.contactRepository.findOne({
            where: {
                id: id
            },
            relations: ['user'],

        })

        if (tmpContact === null) {
            throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
        }

        if (tmpContact.user.id !== ownerId) {
            throw new HttpException('User not authorized to perform this operation', HttpStatus.UNAUTHORIZED);
        }

        return tmpContact

    }


    async createContact(newContact: ContactDto, ownerId: number) {

        let tmpContact = this.contactRepository.create(newContact)

        tmpContact.user = await this.usersService.findOneById(ownerId)

        return this.contactRepository.save(tmpContact)
    }

    async updateContact(contactData: ContactDto, contactId: number, ownerId: number) {

        let tmpContact = await this.contactRepository.findOne({
            where: {
                id: contactId
            },
            relations: ['user']
        })

        if (tmpContact === null) {
            throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
        }
        if (tmpContact.user.id !== ownerId) {
            throw new HttpException('User not authorized to perform this operation', HttpStatus.UNAUTHORIZED);
        } else {

            let {
                firstName,
                lastName,
                email,
                phone1,
                phone2,
                address,
                favoriteColor,
                birthday,
            } = contactData


            tmpContact.firstName = firstName
            tmpContact.lastName = lastName
            tmpContact.email = email
            tmpContact.phone1 = phone1
            tmpContact.phone2 = phone2
            tmpContact.address = address
            tmpContact.favoriteColor = favoriteColor
            tmpContact.birthday = birthday

            return await this.contactRepository.save(tmpContact);
        }


    }

    async deleteContact(contactId: number, ownerId: number) {
        let tmpContact = await this.contactRepository.findOne({
            where: {
                id: contactId
            },
            relations: ['user'],

        })

        if (tmpContact === null) {
            throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
        }
        if (tmpContact.user.id !== ownerId) {
            throw new HttpException('User not authorized to perform this operation', HttpStatus.UNAUTHORIZED);
        } else {
            return await this.contactRepository.delete(contactId);
        }

    }

}
