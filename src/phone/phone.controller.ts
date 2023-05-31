import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { CreatePhoneDto } from './dto/create-phone.dto';

@Controller('phone')
export class PhoneController {
  constructor(private readonly postService: PhoneService) {}


  // Получение всех номеров
  @Get('phoneVerify/:id')
  @HttpCode(200)
  async phoneVerify(@Param('id') id:string) {
    return this.postService.phoneVerify(id);
  }

  // Получение всех номеров
  @Get()
  @HttpCode(200)
  async getAll() {
    return this.postService.getAll();
  }

  // Добавления номера
  @Post()
  @HttpCode(200)
  async create(@Body() dto: CreatePhoneDto) {
    return this.postService.create(dto);
  }

  // Добавления номера много
  @Post('/more')
  @HttpCode(200)
  async createMore(@Body() dto: CreatePhoneDto[]) {
    return this.postService.createMore(dto);
  }

  // Нахождения номера по id
  @Get(':id')
  @HttpCode(200)
  async getById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  // Изменить номер
  @Put(':id')
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() dto: CreatePhoneDto) {
    return this.postService.update(id, dto);
  }

  // Удаление номера
  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string) {
    return this.postService.delete(id);
  }

  // Проверка номера
  @Get('verify/:id')
  @HttpCode(200)
  async verify(@Param('id') id: string) {
    return this.postService.verify(id);
  }
}
