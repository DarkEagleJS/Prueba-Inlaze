import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from './../user/shemas/user.schema';
import { UserModule } from './../user/user.module';
import { UserService } from './../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from "@nestjs/passport"
import { Auth, AuthSchema } from './shemas/auth.schema';
import { LocalStrategy } from './local.auth';

@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '60s' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UserService, LocalStrategy],
  controllers: [AuthController],
})

export class AuthModule {}
