import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './shemas/auth.schema';
import { UserService } from './../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<Auth>, private readonly userService: UserService, private jwtService: JwtService) {}

    async validateUser(nameUser: string, password: string): Promise<any> {
      var bcrypt = require('bcryptjs');
      const user = await this.userService.getUser({ nameUser });
      if (!user) return null;
      const passwordValid = await bcrypt.compare(password, user.password)
      if (!user) {
          throw new NotAcceptableException('could not find the user');
      }
      if (user && passwordValid) {
          return user;
      }
      return null;
    }
    
    async login(user: any) {
        const payload = { nameUser: user.nameUser, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
