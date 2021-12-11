import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { GithubController } from './github/github.controller';
import { GithubService } from './github/github.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { AuthController } from './auth/auth.controller'
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), HttpModule,
  AuthModule, DatabaseModule],
  controllers: [GithubController, DatabaseController, AuthController],
  providers: [GithubService],
})
export class AppModule {}
