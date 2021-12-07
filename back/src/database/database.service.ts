import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ContactsDto } from './schema/contacts.dto';
import { Contacts, ContactsDocument } from './schema/contacts.schema';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel(Contacts.name) private contactsModel: Model<ContactsDocument>
    ){}

    async addData(addDataDto: ContactsDto): Promise<Contacts> {
        const createdData = new this.contactsModel(addDataDto)
        return createdData.save()
    }

    async getData(): Promise<Contacts[]> {
        return this.contactsModel.find().exec()
    }
}
