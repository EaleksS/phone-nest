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
      host: 'ep-weathered-breeze-927410-pooler.eu-central-1.postgres.vercel-storage.com',
      port: 5432,
      url: 'postgres://default:dPLwFtBz0rn6@ep-weathered-breeze-927410-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb',
      database: 'verceldb',
      username: 'default',
      password: 'dPLwFtBz0rn6',
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
