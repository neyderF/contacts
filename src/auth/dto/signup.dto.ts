import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator'

export class SignUpDto {

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

}