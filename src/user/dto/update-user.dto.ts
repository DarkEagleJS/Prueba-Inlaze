import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    nameUser: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}