import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactsDocument = Contacts & Document;

@Schema()
export class Contacts {
    @Prop()
    nameRu: string;

    @Prop()
    nameEn: string;

    @Prop()
    position: string;

    @Prop()
    age: string;

    @Prop()
    location: string;

    @Prop()
    educationRu: string;

    @Prop()
    educationEn: string;

    @Prop()
    number: number;

    @Prop()
    telegram: string;

    @Prop()
    email: string;

    @Prop()
    github: string;
}

export const ContactsSchema = SchemaFactory.createForClass(Contacts);