import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { ResumeInfoDto } from './schema/resumeinfo.dto';
import { ResumeInfo, ResumeInfoDocument } from './schema/resumeinfo.schema';

@Injectable()
export class DatabaseService {
    constructor(
        @InjectModel(ResumeInfo.name) private ResumeInfoModel: Model<ResumeInfoDocument>
    ){}

    async addData(addDataDto: ResumeInfoDto): Promise<ResumeInfo> {
        const createdData = new this.ResumeInfoModel(addDataDto)
        return createdData.save()
    }

    async patchData(query: any, newString: any): Promise<any> {
        return await this.ResumeInfoModel.findOneAndUpdate(query, newString)
    }

    async getData(): Promise<ResumeInfo[]> {
        return this.ResumeInfoModel.find().exec()
    }
}
