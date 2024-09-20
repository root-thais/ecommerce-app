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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("../dto/user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getUsers(res, req) {
        const users = await this.userService.getUsers();
        if (users) {
            return res.status(200).json(users);
        }
        return res.status(404).json({
            error: "Nenhum usuário encontrado."
        });
    }
    async getUser(user_id, res, req) {
        console.log('no controller de getUser');
        const user = await this.userService.getUser(user_id);
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(404).json({
            error: "Não foi possível encontrar este usuário."
        });
    }
    async getAdmins(res, req) {
        const admins = await this.userService.getUsersAdmin();
        if (admins) {
            return res.status(200).json(admins);
        }
        return res.status(404).json({
            error: "Nenhum usuário administrador encontrado."
        });
    }
    async getSellers(res, req) {
        const sellers = await this.userService.getUserSeller();
        if (sellers) {
            return res.status(200).json(sellers);
        }
        return res.status(404).json({
            error: "Nenhum usuário vendedor encontrado."
        });
    }
    async getClients(res, req) {
        const clients = await this.userService.getUsersClient();
        if (clients) {
            return res.status(200).json(clients);
        }
        return res.status(404).json({
            error: "Nenhum usuário cliente encontrado."
        });
    }
    async newUserAdmin(data, user_id, res, req) {
        const user = await this.userService.createUserAdmin(data, user_id);
        if (user) {
            return res.status(201).json({
                message: "Usuário admin criado com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Erro ao criar usuário."
        });
    }
    async newUserSeller(data, user_id, res, req) {
        const seller = await this.userService.createUserSeller(data, user_id);
        if (seller) {
            return res.status(201).json({
                message: "Usuario vendedor criado com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Erro ao criar usuário vendedor."
        });
    }
    async newUserClient(data, user_id, res, req) {
        const client = await this.userService.createUserClient(data, user_id);
        console.log(client);
        if (client) {
            return res.status(201).json({
                message: "Cliente registrado com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Erro ao se registrar."
        });
    }
    async updateUser(data, user_id, res, req) {
        const user = await this.userService.changeUser(data, user_id);
        if (user) {
            return res.status(200).json({
                message: "Usuário atualizado com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Erro ao editar usuário."
        });
    }
    async deleteUser(user_id, res, req) {
        const user = await this.userService.destroyUser(user_id);
        if (user) {
            return res.status(200).json({
                message: "Usuário excluido com sucesso!"
            });
        }
        return res.status(404).json({
            error: "Erro ao excluir usuário."
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('get-users'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('get-admins'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAdmins", null);
__decorate([
    (0, common_1.Get)('get-sellers'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSellers", null);
__decorate([
    (0, common_1.Get)('get-clients'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getClients", null);
__decorate([
    (0, common_1.Post)('new-admin'),
    __param(0, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "newUserAdmin", null);
__decorate([
    (0, common_1.Post)('new-seller'),
    __param(0, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "newUserSeller", null);
__decorate([
    (0, common_1.Post)('new-client'),
    __param(0, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "newUserClient", null);
__decorate([
    (0, common_1.Patch)('update-user/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('delete-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map