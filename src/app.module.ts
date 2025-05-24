import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TipoCandidaturaModule } from './tipo-candidatura/tipo-candidatura.module';


import { TipoCandidatura } from './tipo-candidatura/entities/tipo-candidatura.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'vota',
      entities: [TipoCandidatura],
      autoLoadEntities: true,

      synchronize: true, // ¡No usar en producción!
    }),

    TipoCandidaturaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// by SANTIAN