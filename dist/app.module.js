"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const phone_module_1 = require("./phone/phone.module");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'dpg-chrlsm1mbg5e1f7kokmg-a',
                port: 5432,
                url: 'postgres://admin:14t9ADOlxaLNCRlDHdNZSgD0lGVrM0yq@dpg-chrlsm1mbg5e1f7kokmg-a.frankfurt-postgres.render.com/phone',
                database: 'phone',
                username: 'admin',
                password: '14t9ADOlxaLNCRlDHdNZSgD0lGVrM0yq',
                entities: [(0, path_1.join)(__dirname, '**', '*.entity{.ts,.js}')],
                migrations: [(0, path_1.join)(__dirname, '**', '*.migration{.ts,.js}')],
                synchronize: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            }),
            phone_module_1.PhoneModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map