import { Body, Controller, Delete, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { ContactsService } from './contacts.service'
import { ContactDto } from './dto/contact.dto'

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    getAllContacts(@Request() req) {

        return this.contactsService.getAllContactsByUser(req.user.userId)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getContactById(@Request() req, @Param('id') id: number) {

        return this.contactsService.getContactById(id, req.user.userId)
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    createContact(@Request() req, @Body() newContact: ContactDto) {

        return this.contactsService.createContact(newContact, req.user.userId)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    updateContact(@Request() req, @Body() contactData: ContactDto, @Param('id') id: number) {

        return this.contactsService.updateContact(contactData, id, req.user.userId)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    deleteContact(@Request() req, @Param('id') id: number) {

        return this.contactsService.deleteContact(id, req.user.userId)
    }
}
