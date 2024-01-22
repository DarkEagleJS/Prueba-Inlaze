import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsInt, IsDate, IsIn } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    nameUser: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}