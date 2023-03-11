import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ContactsService } from './contacts.service'
import { CreateContactDto } from './dto/contact.dto'

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService) { }

    @Get()
    getAllContacts() {
        return this.contactsService.getAllContacts()
    }

    @Post()
    createContact(@Body() newContact: CreateContactDto) {

    

        return this.contactsService.createContact(newContact)
    }


    @Delete(':id')
    deleteContact(@Param('id') id: number) {
       return this.contactsService.deleteContact(id)
    }
}
