import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneModule } from './phone/phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-chrlsm1mbg5e1f7kokmg-a',
      port: 5432,
      url: 'postgres://admin:14t9ADOlxaLNCRlDHdNZSgD0lGVrM0yq@dpg-chrlsm1mbg5e1f7kokmg-a.frankfurt-postgres.render.com/phone',
      database: 'phone',
      username: 'admin',
      password: '14t9ADOlxaLNCRlDHdNZSgD0lGVrM0yq',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
      migrations: [join(__dirname, '**', '*.migration{.ts,.js}')],
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }),
    PhoneModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
