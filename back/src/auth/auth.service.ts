import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { AuthDto } from './schema/auth.dto';
import { Auth, AuthDocument } from './schema/auth.schema';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
        private jwtService: JwtService
    ){}

    // async register(userdata: AuthDto): Promise<any> {
    //     const hash = await bcrypt.hash(userdata.password, 7)
    //     const salt = await bcrypt.genSalt()
    //     console.log(salt)
    //     userdata.password = hash
    //     console.log(userdata)
    //     const createdData = new this.authModel(userdata)
    //     return createdData.save()
    // }

    async validateUser(user: AuthDto): Promise<object> {
        const findInDb: AuthDto = await this.authModel.findOne({ login: user.login })
        if (findInDb) {
            const checkPassword = bcrypt.compareSync(user.password, findInDb.password)
            if (checkPassword) {
                return this.login(user)
            } else {
                throw new UnauthorizedException()
            }
        } else {
            throw new UnauthorizedException()
        }
    }

    async login(userdata: AuthDto): Promise<object> {
        const payload = { username: userdata.login, sub: userdata._id}
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}

