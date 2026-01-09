import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, IsEmail } from 'class-validator';

export class AddMembreDto {
    @ApiProperty({
        description: 'Nom complet du membre à ajouter',
        example: 'John Doe',
        required: true
    })
    @IsNotEmpty()
    @IsString()
    nom: string;

    @ApiProperty({
            example: 'john.doe@example.com',
            description: 'Email de l\'utilisateur',
            required: true,
    })
    @IsString({ message: 'L\'email doit etre une chaine de caracteres' })
    @IsOptional()
    @IsEmail({
        blacklisted_chars: "/,?{}[]#$%^&*()",
    }, { message: 'L\'email doit etre un email valide' })
    email?: string;

}