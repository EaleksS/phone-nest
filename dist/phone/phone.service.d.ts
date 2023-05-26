import { PhoneEntity } from './phone.entity';
import { Repository } from 'typeorm';
import { CreatePhoneDto } from './dto/create-phone.dto';
export declare class PhoneService {
    private readonly phoneRepository;
    constructor(phoneRepository: Repository<PhoneEntity>);
    getAll(): Promise<PhoneEntity[]>;
    create(dto: CreatePhoneDto): Promise<PhoneEntity>;
    createMore(dto: CreatePhoneDto[]): Promise<Promise<PhoneEntity>[]>;
    getById(id: string): Promise<PhoneEntity>;
    update(id: string, dto: CreatePhoneDto): Promise<PhoneEntity>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
    verify(id: string): Promise<void>;
}
