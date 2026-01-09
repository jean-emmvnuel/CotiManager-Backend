import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class AddPaidDto {
    @ApiProperty({
        description: 'ID du membre à ajouter',
        example: 'b1c2d3e4-f5g6-7h8i-9j10-k11l12m13n14',
        required: true
    })
    @IsUUID()
    @IsNotEmpty()
    membreId: string;

    @ApiProperty({
        description: 'Numéro de la période pour laquelle le paiement est effectué',
        example: 1,
        required: true
    })
    @IsNumber()
    @IsNotEmpty()
    numeroPeriode: number

    @ApiProperty({
        description: 'Montant payé par le membre',
        example: 1000,
        required: true
    })
    @IsNotEmpty()
    @IsNumber()
    montant : number;
}