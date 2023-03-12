import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contacts/contact.entity'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import User from './users/user.entity';

@Module({
  imports: [ContactsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'contacts',
    entities: [Contact, User],
    synchronize: true,
  }), AuthModule, UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
