import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneEntity } from './phone.entity';
import { Repository } from 'typeorm';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Injectable()
export class PhoneService {
  constructor(
    @InjectRepository(PhoneEntity)
    private readonly phoneRepository: Repository<PhoneEntity>,
  ) {}

  async getAll() {
    return await this.phoneRepository.find();
  }

  async create(dto: CreatePhoneDto) {
    const phone = this.phoneRepository.create(dto);
    return await this.phoneRepository.save(phone);
  }

  async createMore(dto: CreatePhoneDto[]) {
    return dto.map((element) => {
      return this.phoneRepository.save(this.phoneRepository.create(element));
    });
  }

  async getById(id: string) {
    return await this.phoneRepository.findOne({
      where: {
        id: Number(id),
      },
    });
  }

  async update(id: string, dto: CreatePhoneDto) {
    const phone = await this.getById(id);
    phone.comment = dto.comment;
    phone.phone = dto.phone;
    return await this.phoneRepository.save(phone);
  }

  async delete(id: string) {
    return this.phoneRepository.delete({ id: Number(id) });
  }

  async verify(id: string) {
    const phone = this.phoneRepository.findOne({
      where: {
        phone: id,
      },
    });

    if ((await phone)?.phone) throw new NotFoundException('Номер найден');

    return;
  }
}