import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './schema/auth.schema';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRES}
  }),
  MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_CREDS}@cluster0.bzoxw.mongodb.net/resumedata?retryWrites=true&w=majority`),
  MongooseModule.forFeature([{name: Auth.name, schema: AuthSchema}])],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
