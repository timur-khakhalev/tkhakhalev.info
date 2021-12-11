import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DatabaseService } from './database.service';
import { ResumeInfoDto } from './schema/resumeinfo.dto';

@Controller('database')
export class DatabaseController {
    constructor(private dbService:DatabaseService){}
    @UseGuards(JwtAuthGuard)
    @Post()
    async addData(@Body() ResumeInfoDto: ResumeInfoDto) {
        await this.dbService.addData(ResumeInfoDto)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/upd')
    async patchData(@Body() query: any) {
        return await this.dbService.patchData(query.oldData, query.newData)
    }

    @Get()
    getData() {
        return this.dbService.getData()
    }
}
