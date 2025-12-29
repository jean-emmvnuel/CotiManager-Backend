import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PositionsService {
  constructor(private readonly prisma: PrismaService) {}

//   methode pour recuperer tous les postes
  async getAllPositions() {
    return await this.prisma.position.findMany();
  }

//   methode pour recuperer un poste
  async getOnePosition(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { id: id },
    });
    if (!position) {
      throw new NotFoundException('Aucun poste avec cet id');
    }
    return position;
  }

//   methode pour creer un poste
  async createPosition(data) {
    const positionExist = await this.prisma.position.findFirst({
      where: { nom: data.nom },
    });
    if (positionExist) {
      throw new BadRequestException(
        'Ce poste existe déjà, veuillez choisir un autre',
      );
    }

    return await this.prisma.position.create({
      data,
    });
  }

//   methode pour modifier un poste
  async updatePosition(id: number, data) {
    const positionExist = await this.prisma.position.findUnique({
      where: { id: id },
    });
    if (!positionExist) {
      throw new NotFoundException('Aucun poste avec cet id, on ne peut pas le modifier');
    }
    return await this.prisma.position.update({
      where: { id: id },
      data,
    })
  }

//   methode pour supprimer un poste
  async deletePosition(id: number) {
    const positionExist = await this.prisma.position.findFirst({
      where: { id: id },
    });
    if (!positionExist) {
      throw new NotFoundException('Aucun poste avec cet id, on ne peut pas le supprimer');
    }
    return await this.prisma.position.delete({
      where: { id: id },
    })
  }
}
