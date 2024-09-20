import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';
import { Request, Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getUser(user_id: string, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getAdmins(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getSellers(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getClients(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    newUserAdmin(data: UserDto, user_id: number, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    newUserSeller(data: UserDto, user_id: number, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    newUserClient(data: UserDto, user_id: number, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    updateUser(data: UserDto, user_id: string, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    deleteUser(user_id: string, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
