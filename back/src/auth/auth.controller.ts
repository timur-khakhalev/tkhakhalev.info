import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDto } from './schema/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post()
    loginUser(@Body() data: AuthDto) {
        return this.authService.validateUser(data)
    }

    // @Post('/register')
    // registerUser(@Body() data: AuthDto) {
    //     return this.authService.register(data)
    // }
}
