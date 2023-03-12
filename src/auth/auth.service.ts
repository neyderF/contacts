import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<any> {

        const user = await this.usersService.findOneByUsername(username);

        const isMatch = await bcrypt.compare(pass, user.password);

        if (isMatch) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async signup(userData: SignUpDto) {
        const hashedPassword = await bcrypt.hash(userData.password, jwtConstants.salt);
        try {
            const createdUser = await this.usersService.create({
                ...userData,
                password: hashedPassword
            });

            createdUser.password = undefined;

            return createdUser;
        } catch (error) {
            console.log(error)
            //   if (error?.code === PostgresErrorCode.UniqueViolation) {
            //     throw new HttpException('User with that email already exists', HttpStatus.BAD_REQUEST);
            //   }
            //   throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
