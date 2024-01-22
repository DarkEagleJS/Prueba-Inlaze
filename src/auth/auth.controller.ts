import {Body, ConflictException, NotFoundException, Controller, Get, UseGuards, Param, Request, Post, Delete, HttpCode, Put, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { ReturnLoginDto } from './dto/return-login.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { JwtService } from '@nestjs/jwt';
import { bcrypt } from 'bcryptjs';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService, private readonly jwtService: JwtService) {}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
  
}