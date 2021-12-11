import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { ResumeInfo, ResumeInfoSchema } from './schema/resumeinfo.schema'

@Module({
    imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_CREDS}@cluster0.bzoxw.mongodb.net/resumedata?retryWrites=true&w=majority`),
        MongooseModule.forFeature([{ name: ResumeInfo.name, schema: ResumeInfoSchema }])],
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule {}
