import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { Contacts, ContactsSchema } from './database/schema/contacts.schema';
import { AuthController } from './auth/auth.controller'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), HttpModule, MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_CREDS}@cluster0.bzoxw.mongodb.net/resumedata?retryWrites=true&w=majority`),
  MongooseModule.forFeature([{name: Contacts.name, schema: ContactsSchema}]),
  AuthModule],
  controllers: [GithubController, DatabaseController, AuthController],
  providers: [GithubService, DatabaseService],
})
export class AppModule {}
