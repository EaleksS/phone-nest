import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
export declare class PhoneController {
    private readonly postService;
    constructor(postService: PhoneService);
    getAll(): Promise<import("./phone.entity").PhoneEntity[]>;
    create(dto: CreatePhoneDto): Promise<import("./phone.entity").PhoneEntity>;
    createMore(dto: CreatePhoneDto[]): Promise<Promise<import("./phone.entity").PhoneEntity>[]>;
    getById(id: string): Promise<import("./phone.entity").PhoneEntity>;
    update(id: string, dto: CreatePhoneDto): Promise<import("./phone.entity").PhoneEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    verify(id: string): Promise<void>;
}
