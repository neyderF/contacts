import { IsString, IsEmail, IsNumber, IsNotEmpty, IsOptional, IsDate, IsDateString } from 'class-validator'

export class ContactDto {

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

    @IsDateString()
    @IsNotEmpty()
    birthday: Date


}