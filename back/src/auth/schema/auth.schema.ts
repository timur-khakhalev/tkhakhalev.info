import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
    @Prop()
    login: string;

    @Prop()
    password: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);