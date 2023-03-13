import { IsString, IsEmail, IsNumber, IsNotEmpty, IsOptional, IsDate, IsDateString } from 'class-validator'

export class ContactDto {

    @IsString()
    @IsNotEmpty()
    firstName: string

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
    phone2?: number | null

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsOptional()
    favoriteColor?: string | null

    @IsDateString()
    @IsNotEmpty()
    birthday: Date


}