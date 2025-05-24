import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
import { UpdateTipoCandidaturaDto } from './dto/update-tipo-candidatura.dto';

@Controller('tipo-candidatura')
export class TipoCandidaturaController {
  constructor(private readonly tipoCandidaturaService: TipoCandidaturaService) {}

  @Post()
  create(@Body() createTipoCandidaturaDto: CreateTipoCandidaturaDto) {
    return this.tipoCandidaturaService.create(createTipoCandidaturaDto);
  }

  @Get()
  findAll() {
    return this.tipoCandidaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoCandidaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoCandidaturaDto: UpdateTipoCandidaturaDto) {
    return this.tipoCandidaturaService.update(+id, updateTipoCandidaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoCandidaturaService.remove(+id);
  }
}
