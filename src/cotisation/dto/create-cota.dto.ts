import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateCotisationDto {
  @ApiProperty({
    description: 'Le nom de la cotisation',
    example: 'Cotisation Mensuelle',
    required: true,
    minLength: 3,
    maxLength: 40,
  })
  @IsString()
  @IsNotEmpty()
  nom: string;

  @ApiProperty({
    description: 'Le montant de la cotisation',
    example: 1000,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  montant: number;

  @ApiProperty({
    description: 'La fréquence en jours de la cotisation',
    example: 30,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  frequenceJour: number;

  @ApiProperty({
    description: 'La date de debut de la cotisation',
    example: '2022-01-01',
    required: true,
  })
  @Type(() => Date)
  @IsDate()
  dateDebut: Date;

  @ApiProperty({
    description: 'Le total de période de la cotisation',
    example: 365,
    required: true,
  })
  @IsInt()
  @IsNotEmpty()
  totalePeriode: number;

  @ApiProperty({
    description: 'L\'id du proprietaire de la cotisation',
    example: "21195dfd-dnf5-bef6-411c-a94c-6cd5c63e4b55",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  proprietaireId: string;
}
