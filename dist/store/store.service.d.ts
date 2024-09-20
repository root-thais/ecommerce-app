import { PrismaService } from '../prisma/prisma.service';
import { StoreDto } from '../dto/store.dto';
export declare class StoreService {
    private prisma;
    private userId;
    constructor(prisma: PrismaService);
    getStore(store_id: string): Promise<{
        store_id: number;
        name: string;
        slogan: string;
        status: import(".prisma/client").$Enums.Status;
        email: string;
        created_by: string;
        instagram_url: string;
        facebook_url: string;
        x_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }>;
    listStore(): Promise<{
        store_id: number;
        name: string;
        slogan: string;
        status: import(".prisma/client").$Enums.Status;
        email: string;
        created_by: string;
        instagram_url: string;
        facebook_url: string;
        x_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }[]>;
    newStore(data: StoreDto, store_id: number): Promise<{
        store_id: number;
        name: string;
        slogan: string;
        status: import(".prisma/client").$Enums.Status;
        email: string;
        created_by: string;
        instagram_url: string;
        facebook_url: string;
        x_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }>;
    updateStore(store_id: string, data: StoreDto): Promise<{
        store_id: number;
        name: string;
        slogan: string;
        status: import(".prisma/client").$Enums.Status;
        email: string;
        created_by: string;
        instagram_url: string;
        facebook_url: string;
        x_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }>;
    destroyStore(store_id: string): Promise<{
        store_id: number;
        name: string;
        slogan: string;
        status: import(".prisma/client").$Enums.Status;
        email: string;
        created_by: string;
        instagram_url: string;
        facebook_url: string;
        x_url: string;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }>;
}
