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
exports.PhoneService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phone_entity_1 = require("./phone.entity");
const typeorm_2 = require("typeorm");
let PhoneService = class PhoneService {
    constructor(phoneRepository) {
        this.phoneRepository = phoneRepository;
    }
    async getAll() {
        return await this.phoneRepository.find();
    }
    async create(dto) {
        const phone = this.phoneRepository.create(dto);
        return await this.phoneRepository.save(phone);
    }
    async createMore(dto) {
        return dto.map((element) => {
            return this.phoneRepository.save(this.phoneRepository.create(element));
        });
    }
    async getById(id) {
        return await this.phoneRepository.findOne({
            where: {
                id: Number(id),
            },
        });
    }
    async update(id, dto) {
        const phone = await this.getById(id);
        phone.comment = dto.comment;
        phone.phone = dto.phone;
        return await this.phoneRepository.save(phone);
    }
    async delete(id) {
        return this.phoneRepository.delete({ id: Number(id) });
    }
    async verify(id) {
        var _a;
        const phone = this.phoneRepository.findOne({
            where: {
                phone: id,
            },
        });
        if ((_a = (await phone)) === null || _a === void 0 ? void 0 : _a.phone)
            throw new common_1.NotFoundException('Номер найден');
        return;
    }
};
PhoneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(phone_entity_1.PhoneEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PhoneService);
exports.PhoneService = PhoneService;
//# sourceMappingURL=phone.service.js.map