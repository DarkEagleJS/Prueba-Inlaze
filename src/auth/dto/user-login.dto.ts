import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserLoginDto {

    @IsString()
    @IsNotEmpty()
    nameUser: string;
    @IsString()
    @IsNotEmpty()
    password: string;

}