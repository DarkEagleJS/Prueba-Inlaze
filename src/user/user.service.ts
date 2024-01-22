import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './shemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UserLoginDto } from './../auth/dto/user-login.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(nameUser: string, password: string): Promise<User> {
    return this.userModel.create({
        nameUser,
        password,
    });
  }
  
  async getUser(query: object ): Promise<User> {
      return this.userModel.findOne(query);
  }

}
