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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findUser(email) {
        try {
            return this.prisma.user.findFirstOrThrow({
                where: {
                    email: email
                }
            });
        }
        catch (err) {
            return null;
        }
    }
    async getUser(user_id) {
        try {
            console.log('no service de findFirst');
            return this.prisma.user.findFirst({
                where: {
                    user_id: parseInt(user_id)
                }
            });
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async getUsers() {
        try {
            return this.prisma.user.findMany();
        }
        catch (err) {
            return null;
        }
    }
    async getUsersAdmin() {
        try {
            console.log('chegou no service');
            return this.prisma.user.findMany({
                where: {
                    type: 'admin'
                }
            });
        }
        catch (err) {
            return null;
        }
    }
    async getUserSeller() {
        try {
            return this.prisma.user.findMany({
                where: {
                    type: 'seller'
                }
            });
        }
        catch (err) {
            return null;
        }
    }
    async getUsersClient() {
        try {
            return this.prisma.user.findMany({
                where: {
                    type: 'client'
                }
            });
        }
        catch (err) {
            return null;
        }
    }
    async createUserAdmin(data, user_id) {
        try {
            const find_user = await this.prisma.user.findFirst({
                where: {
                    user_id: user_id,
                    email: data.email
                }
            });
            console.log('antes do if');
            if (!find_user) {
                console.log('no if');
                return this.prisma.user.create({
                    data: {
                        name: data.name,
                        email: data.email,
                        type: 'admin',
                        gender: data.gender,
                        password: bcrypt.hashSync(data.password, 10),
                        phone_number: data.phone_number,
                        document_cpf: data.document_cpf,
                        date_of_birth: data.date_of_birth
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async createUserClient(data, user_id) {
        try {
            const find_user = await this.prisma.user.findFirst({
                where: {
                    user_id: user_id,
                    email: data.email
                }
            });
            if (!find_user) {
                console.log('dentro do if');
                return this.prisma.user.create({
                    data: {
                        name: data.name,
                        email: data.email,
                        type: 'client',
                        date_of_birth: data.date_of_birth,
                        document_cpf: data.document_cpf,
                        phone_number: data.phone_number,
                        gender: data.gender,
                        password: bcrypt.hashSync(data.password, 10)
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async createUserSeller(data, user_id) {
        try {
            const find_user = await this.prisma.user.findFirst({
                where: {
                    user_id: user_id,
                    email: data.email
                }
            });
            console.log('antes do if', find_user);
            if (!find_user) {
                console.log('Dentro do if');
                return this.prisma.user.create({
                    data: {
                        name: data.name,
                        email: data.email,
                        type: 'seller',
                        gender: data.gender,
                        phone_number: data.phone_number,
                        document_cpf: data.document_cpf,
                        date_of_birth: data.date_of_birth,
                        password: bcrypt.hashSync(data.password, 10)
                    }
                });
            }
            console.log('dentro do if');
        }
        catch (err) {
            console.log(err);
            return null;
        }
    }
    async changeUser(data, user_id) {
        try {
            const find_admin = await this.prisma.user.findFirstOrThrow({
                where: {
                    user_id: parseInt(user_id)
                }
            });
            if (find_admin) {
                return this.prisma.user.update({
                    where: {
                        user_id: parseInt(user_id)
                    },
                    data: {
                        name: data.name,
                        email: data.email,
                        gender: data.gender,
                        phone_number: data.phone_number,
                        date_of_birth: data.date_of_birth,
                        password: bcrypt.hashSync(data.password, 10)
                    }
                });
            }
        }
        catch (err) {
            return null;
        }
    }
    async destroyUser(user_id) {
        try {
            const find_user = await this.prisma.user.findFirstOrThrow({
                where: {
                    user_id: parseInt(user_id)
                }
            });
            if (find_user) {
                return this.prisma.user.delete({
                    where: {
                        user_id: parseInt(user_id)
                    }
                });
            }
        }
        catch (err) {
            return null;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map