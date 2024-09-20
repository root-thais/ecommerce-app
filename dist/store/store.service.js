"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StoreService = class StoreService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getStore(store_id) {
        try {
            return this.prisma.store.findFirstOrThrow({
                where: {
                    store_id: parseInt(store_id)
                }
            });
        }
        catch (err) {
            return null;
        }
    }
    async listStore() {
        try {
            return this.prisma.store.findMany();
        }
        catch (err) {
            return null;
        }
    }
    async newStore(data, store_id) {
        try {
            console.log('chegou no service');
            const find_store = await this.prisma.store.findFirst({
                where: {
                    store_id: store_id,
                    name: data.name,
                },
            });
            console.log('find store', find_store);
            if (!find_store) {
                console.log('dentro do if');
                return this.prisma.store.create({
                    data: {
                        name: data.name,
                        email: data.email,
                        status: 'active',
                        facebook_url: data.facebook_url,
                        x_url: data.x_url,
                        slogan: data.slogan,
                        instagram_url: data.instagram_url,
                        created_by: data.created_by
                    }
                });
            }
            console.log('passou do if no service');
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async updateStore(store_id, data) {
        try {
            console.log('no service');
            const find_store = await this.prisma.store.findFirst({
                where: {
                    store_id: parseInt(store_id)
                }
            });
            if (find_store) {
                return this.prisma.store.update({
                    where: {
                        store_id: parseInt(store_id)
                    },
                    data: {
                        name: data.name,
                        email: data.email,
                        status: data.status,
                        facebook_url: data.facebook_url,
                        x_url: data.x_url,
                        slogan: data.slogan,
                        instagram_url: data.instagram_url
                    }
                });
            }
        }
        catch (err) {
            console.log('o error', err);
            return null;
        }
    }
    async destroyStore(store_id) {
        try {
            const find_store = await this.prisma.store.findFirst({
                where: {
                    store_id: parseInt(store_id)
                }
            });
            if (find_store) {
                return this.prisma.store.delete({
                    where: {
                        store_id: parseInt(store_id)
                    }
                });
            }
        }
        catch (err) {
            return null;
        }
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoreService);
//# sourceMappingURL=store.service.js.map