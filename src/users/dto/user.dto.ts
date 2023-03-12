import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator'

export class CreateUserDto {

    @IsOptional()
    @IsNumber()
    id?: number

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    password: string

}