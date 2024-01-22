import {Body,ConflictException, NotFoundException, Controller, Get, Param, Post, Delete, HttpCode, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './shemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Post('/signup')
    async createUser(
        @Body('nameUser') nameUser: string,
        @Body('password') password: string,
    ): Promise<User> {
        var bcrypt = require('bcryptjs');
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        const result = await this.userService.createUser(
            nameUser,
            hash,
        );
        return result;
    }

  }