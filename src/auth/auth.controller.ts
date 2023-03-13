import { Controller } from '@nestjs/common';
import { Body, Get, Post, Request, UseGuards } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {


    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAuthenticatedUser(@Request() req) {
        return req.user
    }

    @Post('signup')
    async signup(@Body() newUser: SignUpDto) {
        return this.authService.signup(newUser);
    }
}
