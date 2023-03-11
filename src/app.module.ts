import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Contact} from './contacts/contact.entity'

@Module({
  imports: [ContactsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'contacts',
    entities: [Contact],
    synchronize: true,
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
