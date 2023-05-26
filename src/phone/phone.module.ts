import { Module } from '@nestjs/common';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneEntity } from './phone.entity';

@Module({
  controllers: [PhoneController],
  providers: [PhoneService],
  imports: [TypeOrmModule.forFeature([PhoneEntity])],
})
export class PhoneModule {}
