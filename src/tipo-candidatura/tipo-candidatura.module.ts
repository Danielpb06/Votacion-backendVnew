import { Module } from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { TipoCandidaturaController } from './tipo-candidatura.controller';

@Module({
  controllers: [TipoCandidaturaController],
  providers: [TipoCandidaturaService],
})
export class TipoCandidaturaModule {}
