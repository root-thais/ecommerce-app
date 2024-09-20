import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../dto/login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    singIn(data: LoginDto, user_id: number): Promise<{
        access_token: string;
    }>;
}
