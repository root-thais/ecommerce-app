import { StoreService } from './store.service';
import { StoreDto } from '../dto/store.dto';
import { Request, Response } from 'express';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    getListStore(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    viewStore(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    newStore(data: StoreDto, store_id: number, user_id: number, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    upStore(data: StoreDto, store_id: string, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    deleteStore(store_id: string, res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
}
