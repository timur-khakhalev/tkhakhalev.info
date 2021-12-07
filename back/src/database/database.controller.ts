import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DatabaseService } from './database.service';
import { ContactsDto } from './schema/contacts.dto';

@Controller('database')
export class DatabaseController {
    constructor(private dbService:DatabaseService){}
    @UseGuards(JwtAuthGuard)
    @Post()
    async addData(@Body() ContactsDto: ContactsDto) {
        console.log(ContactsDto)
        await this.dbService.addData(ContactsDto)
    }

    @Get()
    getData() {
        return this.dbService.getData()
    }
}
