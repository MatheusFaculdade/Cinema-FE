import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.sessao.findUnique({
      where: { id },
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  async create(dto: CreateSessaoDto) {
    return this.prisma.sessao.create({
      data: {
        filmeId: dto.filmeId,
        salaId: dto.salaId,
        dataHora: dto.dataHora,
        preco: dto.preco,
        idioma: dto.idioma,
        formato: dto.formato,
      },
    });
  }

  async update(id: string, dto: UpdateSessaoDto) {
    return this.prisma.sessao.update({
      where: { id },
      data: {
        filmeId: dto.filmeId,
        salaId: dto.salaId,
        dataHora: dto.dataHora,
        preco: dto.preco,
        idioma: dto.idioma,
        formato: dto.formato,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.sessao.delete({ where: { id } });
  }
}
