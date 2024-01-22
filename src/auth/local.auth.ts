import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nameUser: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(nameUser, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}