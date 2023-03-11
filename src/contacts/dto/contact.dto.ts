import {IsString, IsEmail, IsNumber,IsNotEmpty,IsOptional} from 'class-validator'

export class CreateContactDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNumber()
    @IsNotEmpty()
    phone1: number

    @IsNumber()
    @IsOptional()
    phone2?: number

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsOptional()
    favoriteColor?: string

    @IsNumber()
    @IsNotEmpty()
    age: number
}