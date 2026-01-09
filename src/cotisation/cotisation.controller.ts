import { Body, Controller, Post, UseGuards, Request, Get, Param, Put, Delete } from '@nestjs/common';
import { CotisationService } from './cotisation.service';
import { UpdateCotisationDto } from './dto/update-cota.dto';
import { CreateCotisationDto } from './dto/create-cota.dto';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { AddMembreDto } from './dto/add-membre.dto';
import { AddPaidDto } from './dto/add-paid.dto';
// import { Param } from 'src/generated/prisma/runtime/client';

@Controller('cotisation')
export class CotisationController {
    constructor(private readonly cotisationService: CotisationService) { }

    // Lister toutes les cotisations d'un utilisateur
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Request() req) {
        return this.cotisationService.findAll(req.user.sub);
    }

    // Récupérer une cotisation par son ID
    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    findOne(@Param('id') id: string, @Request() req) {
        return this.cotisationService.findOne(id, req.user.sub);
    }

    // Créer une nouvelle cotisation
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() data: CreateCotisationDto, @Request() req) {
        return this.cotisationService.createCotisation(data, req.user.sub);
    }

    // modifier une cotisation existante
    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    update(@Param('id') id: string, @Body() data: UpdateCotisationDto, @Request() req) {
        return this.cotisationService.updateCotisation(id, data, req.user.sub);
    }

    // supprimer une cotisation existante
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    delete(@Param('id') id: string, @Request() req) {
        return this.cotisationService.deleteCotisation(id, req.user.sub);
    }

    // Ajouter un membre à une cotisation
    @UseGuards(JwtAuthGuard)
    @Post('/add/membre/:id')
    addMembre(@Param('id') id: string, @Body() data: AddMembreDto, @Request() req) {
        return this.cotisationService.addMembre(id, data, req.user.sub);
    }

    // recuperer les membres d'une cotisation
    @UseGuards(JwtAuthGuard)
    @Get('/membres/:id')
    getMembres(@Param('id') id: string, @Request() req) {
        return this.cotisationService.getMembres(id, req.user.sub);
    }

    // supprimer un membre d'une cotisation
    @UseGuards(JwtAuthGuard)
    @Delete('/membres/:id')
    deleteMembre(@Param('id') id: string, @Request() req) {
        return this.cotisationService.deleteMembre(id, req.user.sub);
    }

    // Lister tous les paiements d'une cotisation
    @UseGuards(JwtAuthGuard)
    @Get('/paiements/:id')
    getPaiements(@Param('id') id: string, @Request() req) {
        return this.cotisationService.getPaiements(id, req.user.sub);
    }

    // Ajouter un paiement à une cotisation
    @UseGuards(JwtAuthGuard)
    @Post('/paiements/:id')
    addPaiement(@Param('id') id: string, @Body() data: AddPaidDto, @Request() req) {
        return this.cotisationService.addPaiement(id, data, req.user.sub);
    }

    // Générer un code d'invitation pour une cotisation
    @UseGuards(JwtAuthGuard)
    @Post('/:id/invite')
    generateInviteCode(@Param('id') id: string, @Request() req) {
        return this.cotisationService.generateInviteCode(id, req.user.sub);
    }

    // Rejoindre une cotisation via code d'invitation
    @UseGuards(JwtAuthGuard)
    @Post('/join/:inviteCode')
    joinCotisation(@Param('inviteCode') inviteCode: string, @Request() req) {
        return this.cotisationService.joinCotisation(inviteCode, req.user.sub);
    }

    // Supprimer un paiement
    @UseGuards(JwtAuthGuard)
    @Delete('/paiements/:paiementId')
    deletePaiement(@Param('paiementId') paiementId: string, @Request() req) {
        return this.cotisationService.deletePaiement(paiementId, req.user.sub);
    }
}
