import { AuthService } from './auth.service';
import { LoginDto } from '../dto/login.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singIn(data: LoginDto, user_id: number, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getProfile(req: Request): Promise<{
        user_id: number;
        name: string;
        email: string;
        document_cpf: string;
        date_of_birth: string;
        phone_number: string;
        gender: string;
        password: string;
        type: string;
        created_at: string;
        updated_at: string;
        deleted_at: string;
    }>;
}
