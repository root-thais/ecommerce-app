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
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./store.service");
const store_dto_1 = require("../dto/store.dto");
const auth_guard_1 = require("../auth/auth.guard");
let StoreController = class StoreController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async getListStore(res, req) {
        const stores = await this.storeService.listStore();
        if (stores) {
            return res.status(200).json(stores);
        }
        return res.status(404).json({
            error: "Nenhuma loja cadastrada."
        });
    }
    async viewStore(id, res) {
        const store = await this.storeService.getStore(id);
        if (store) {
            return res.status(200).json(store);
        }
        return res.status(404).json({
            error: "Loja não encontrada."
        });
    }
    async newStore(data, store_id, user_id, res, req) {
        console.log('no controllerr', req.user);
        const store = await this.storeService.newStore(data, store_id);
        console.log('store', store);
        if (store) {
            console.log('dentro do if');
            return res.status(201).json({
                message: "Nova loja cadastrada",
                store
            });
        }
        console.log('passou do if');
        return res.status(403).json({
            error: "Erro ao cadastrar nova loja."
        });
    }
    async upStore(data, store_id, res, req) {
        const store = await this.storeService.updateStore(store_id, data);
        console.log('no controller');
        if (store) {
            return res.status(200).json({
                message: "Loja atualizada com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Erro ao atualizar esta loja."
        });
    }
    async deleteStore(store_id, res, req) {
        const store = await this.storeService.destroyStore(store_id);
        if (store) {
            return res.status(200).json({
                message: "Loja excluída com sucesso!"
            });
        }
        return res.status(403).json({
            error: "Não foi possível excluir esta loja."
        });
    }
};
exports.StoreController = StoreController;
__decorate([
    (0, common_1.Get)('list-stores'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "getListStore", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "viewStore", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('new-store'),
    __param(0, (0, common_1.Body)()),
    __param(3, (0, common_1.Res)()),
    __param(4, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_dto_1.StoreDto, Number, Number, Object, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "newStore", null);
__decorate([
    (0, common_1.Patch)('update-store/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_dto_1.StoreDto, String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "upStore", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], StoreController.prototype, "deleteStore", null);
exports.StoreController = StoreController = __decorate([
    (0, common_1.Controller)('store'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
//# sourceMappingURL=store.controller.js.map