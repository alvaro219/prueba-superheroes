import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/users/users.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('Login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}