import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import User from './user.entity';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }
    async findOneByUsername(username: string) {
        const user = await this.userRepository.findOne({
            where: {
                username,
            }
        });

        if (user) {
            return user;
        }

        throw new HttpException('User with this username does not exist', HttpStatus.NOT_FOUND);
    }

    async findOneById(id: number) {
        const user = await this.userRepository.findOne({
            where: {
                id,
            }
        });

        if (user) {
            return user;
        }

        throw new HttpException('User with this username does not exist', HttpStatus.NOT_FOUND);
    }


    async create(userData: CreateUserDto) {
        const newUser = this.userRepository.create(userData);
        await this.userRepository.save(newUser);
        return newUser;
    }
}
