import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  toObject() {
    throw new Error('Method not implemented.');
  }
  @Prop({ trim: true, required: true })
  nameUser: string;
  @Prop({ trim: true, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);