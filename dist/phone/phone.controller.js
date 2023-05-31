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
exports.PhoneController = void 0;
const common_1 = require("@nestjs/common");
const phone_service_1 = require("./phone.service");
const create_phone_dto_1 = require("./dto/create-phone.dto");
let PhoneController = class PhoneController {
    constructor(postService) {
        this.postService = postService;
    }
    async phoneVerify(id) {
        return this.postService.phoneVerify(id);
    }
    async getAll() {
        return this.postService.getAll();
    }
    async create(dto) {
        return this.postService.create(dto);
    }
    async createMore(dto) {
        return this.postService.createMore(dto);
    }
    async getById(id) {
        return this.postService.getById(id);
    }
    async update(id, dto) {
        return this.postService.update(id, dto);
    }
    async delete(id) {
        return this.postService.delete(id);
    }
    async verify(id) {
        return this.postService.verify(id);
    }
};
__decorate([
    (0, common_1.Get)('phoneVerify/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "phoneVerify", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/more'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "createMore", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_phone_dto_1.CreatePhoneDto]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('verify/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhoneController.prototype, "verify", null);
PhoneController = __decorate([
    (0, common_1.Controller)('phone'),
    __metadata("design:paramtypes", [phone_service_1.PhoneService])
], PhoneController);
exports.PhoneController = PhoneController;
//# sourceMappingURL=phone.controller.js.map