import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<User> {
        const user = await this.usersService.findOne(username);
        if (user && await bcrypt.compare(pass, user.password))
            {
                const { ...result } = user;
                return result;
            }
        return null;
    }

    async login(user: { username: string, userId: string}) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
