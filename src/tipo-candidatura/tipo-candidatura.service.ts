import { Injectable } from '@nestjs/common';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
import { UpdateTipoCandidaturaDto } from './dto/update-tipo-candidatura.dto';

@Injectable()
export class TipoCandidaturaService {
  create(createTipoCandidaturaDto: CreateTipoCandidaturaDto) {
    return 'This action adds a new tipoCandidatura';
  }

  findAll() {
    return `This action returns all tipoCandidatura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoCandidatura`;
  }

  update(id: number, updateTipoCandidaturaDto: UpdateTipoCandidaturaDto) {
    return `This action updates a #${id} tipoCandidatura`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoCandidatura`;
  }
}
