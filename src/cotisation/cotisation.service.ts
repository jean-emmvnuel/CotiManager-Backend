import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCotisationDto } from './dto/create-cota.dto';
import { UpdateCotisationDto } from './dto/update-cota.dto';
import { AddMembreDto } from './dto/add-membre.dto';
import { AddPaidDto } from './dto/add-paid.dto';

@Injectable()
export class CotisationService {
    constructor(private readonly prisma: PrismaService) { }

    // lister toutes les cotisations d'un utilisateur (proprietaire et membre)
    async findAll(userId: string) {
        const cotisations = await this.prisma.cotisation.findMany({
            where: {
                OR: [
                    { proprietaireId: userId },
                    { membres: { some: { userId: userId } } },
                ],
                deletedAt: null,
            },
            select: {
                id: true,
                nom: true,
                montant: true,
                frequenceJour: true,
                dateDebut: true,
                totalePeriode: true,
                proprietaireId: true,
            },
        });
        return {
            status: true,
            message: 'Liste des cotisations récupérée avec succès',
            data: cotisations,
        };
    }

    // récupérer une cotisation par son ID
    async findOne(cotisationId: string, userId: string) {
        const cotisation = await this.prisma.cotisation.findFirst({
            where: {
                id: cotisationId,
                OR: [
                    { proprietaireId: userId },
                    { membres: { some: { userId: userId } } },
                ],
                deletedAt: null,
            },
            select: {
                id: true,
                nom: true,
                montant: true,
                frequenceJour: true,
                dateDebut: true,
                totalePeriode: true,
                proprietaireId: true,
            },
        });
        return {
            status: true,
            message: 'Cotisation récupérée avec succès',
            data: cotisation,
        };
    }

    // créer une cotisation pour un utilisateur
    async createCotisation(data: CreateCotisationDto, userId: string) {
        const { nom, montant, frequenceJour, dateDebut, totalePeriode } = data;
        const cotisation = await this.prisma.cotisation.create({
            data: {
                nom,
                montant,
                frequenceJour,
                dateDebut,
                totalePeriode,
                proprietaireId: userId,
            },
            select: {
                id: true,
                nom: true,
                montant: true,
                frequenceJour: true,
                dateDebut: true,
                totalePeriode: true,
            },
        });
        const membre = await this.prisma.membre.create({
            data: {
                nom: nom,
                role: "OWNER",
                userId: userId,
                cotisationId: cotisation.id,
            }
        })
        return {
            status: true,
            message: 'Cotisation créée avec succès',
            data: cotisation
        };
    }

    // modifier une cotisation existante
    async updateCotisation(cotisationId: string, data: UpdateCotisationDto, userId: string) {
        const { nom, montant, frequenceJour, dateDebut, totalePeriode } = data;
        const cotisation = await this.prisma.cotisation.update({
            where: {
                id: cotisationId,
                proprietaireId: userId,
            },
            data: {
                nom,
                montant,
                frequenceJour,
                dateDebut,
                totalePeriode,
            },
        });
        return {
            status: true,
            message: 'Cotisation modifiée avec succès',
            data: cotisation
        };
    }

    // supprimer une cotisation existante
    async deleteCotisation(cotisationId: string, userId: string) {
        await this.prisma.cotisation.updateMany({
            where: {
                id: cotisationId,
                proprietaireId: userId,
            },
            data: {
                deletedAt: new Date(),
            },
        });
        return {
            status: true,
            message: 'Cotisation supprimée avec succès',
        };
    }

    // ajouter un membre à une cotisation
    async addMembre(cotisationId: string, data: AddMembreDto, proprietaireId: string) {
        // Vérifier que l'utilisateur qui ajoute le membre est le propriétaire de la cotisation
        const cotisation = await this.prisma.cotisation.findUnique({
            where: { id: cotisationId },
            select: { proprietaireId: true },
        });
        if (!cotisation) {
            return {
                status: false,
                message: 'Cotisation non trouvée',
            };
        }
        if (cotisation.proprietaireId !== proprietaireId) {
            return {
                status: false,
                message: 'Seul le propriétaire de la cotisation peut ajouter des membres',
            };
        }
        // Ajouter le membre
        const { nom, email } = data;
        const membre = await this.prisma.membre.create({
            data: {
                nom,
                email,
                role: "MEMBER",
                cotisationId: cotisationId,
            },
        });
        return {
            status: true,
            message: 'Membre ajouté avec succès',
            data: membre,
        };
    }

    // recuperer les membres d'une cotisation
    async getMembres(cotisationId: string, userId: string) {
        // Vérifier que l'utilisateur est le propriétaire ou un membre de la cotisation
        const cotisation = await this.prisma.cotisation.findUnique({
            where: { id: cotisationId },
            select: { proprietaireId: true, membres: true },
        });
        if (!cotisation) {
            return {
                status: false,
                message: 'Cotisation non trouvée',
            };
        }
        if (cotisation.proprietaireId !== userId && !cotisation.membres.some((membre) => membre.userId === userId)) {
            return {
                status: false,
                message: 'Seul le propriétaire ou un membre de la cotisation peut acceder aux membres',
            };
        }
        // Recuperer les membres
        const membres = await this.prisma.membre.findMany({
            where: {
                cotisationId: cotisationId,
                deletedAt: null,
            },
            select: {
                id: true,
                nom: true,
                email: true,
                role: true,
            },
        });
        return {
            status: true,
            message: 'Membres récupérés avec succès',
            data: membres,
        };
    }

    // supprimer un membre d'une cotisation
    async deleteMembre(membreId: string, proprietaireId: string) {
        // Vérifier que l'utilisateur qui supprime le membre est le propriétaire de la cotisation
        const membre = await this.prisma.membre.findUnique({
            where: { id: membreId },
            select: { cotisation: { select: { proprietaireId: true } } },
        });
        if (!membre) {
            return {
                status: false,
                message: 'Membre non trouvé',
            };
        }
        if (membre.cotisation.proprietaireId !== proprietaireId) {
            return {
                status: false,
                message: 'Seul le propriétaire de la cotisation peut supprimer des membres',
            };
        }
        // Supprimer le membre
        await this.prisma.membre.update({
            where: {
                id: membreId,
            },
            data: {
                deletedAt: new Date(),
            },
        })
        return {
            status: true,
            message: 'Membre supprimé avec succès',
        };
    }

    // Lister tous les paiements d'une cotisation
    async getPaiements(cotisationId: string, userId: string) {
        // Vérifier que l'utilisateur est le propriétaire ou un membre de la cotisation
        const cotisation = await this.prisma.cotisation.findUnique({
            where: { id: cotisationId },
            select: { proprietaireId: true, membres: true },

        });
        if (!cotisation) {
            return {
                status: false,
                message: 'Cotisation non trouvée',
            };
        }
        if (cotisation.proprietaireId !== userId && !cotisation.membres.some((membre) => membre.userId === userId)) {
            return {
                status: false,
                message: 'Seul le propriétaire ou un membre de la cotisation peut acceder aux paiements',
            };
        }
        // Recuperer les paiements
        const paiements = await this.prisma.payment.findMany({
            where: {
                cotisationId: cotisationId,
                deletedAt: null,
            },
        });
        return {
            status: true,
            message: 'Paiements recuperés avec succès',
            data: paiements,
        }
    }

    // Ajouter un paiement à une cotisation
    async addPaiement(cotisationId: string, data: AddPaidDto, userId: string) {
        // Vérifier que l'utilisateur est le propriétaire
        const cotisation = await this.prisma.cotisation.findUnique({
            where: { id: cotisationId },
            select: { proprietaireId: true },
        });
        if (!cotisation) {
            return {
                status: false,
                message: 'Cotisation non trouvée',
            };
        }
        if (cotisation.proprietaireId !== userId) {
            return {
                status: false,
                message: 'Seul le propriétaire de la cotisation peut ajouter des paiements',
            };
        }
        // Ajouter le paiement
        await this.prisma.payment.create({
            data: {
                cotisationId: cotisationId,
                membreId: data.membreId,
                montant: data.montant,
                numeroPeriode: data.numeroPeriode,
            },
        });
        return {
            status: true,
            message: 'Paiement ajouté avec succès',
        }
    }

    // Générer un code d'invitation pour une cotisation
    async generateInviteCode(cotisationId: string, userId: string) {
        // Vérifier que l'utilisateur est le propriétaire
        const cotisation = await this.prisma.cotisation.findUnique({
            where: { id: cotisationId },
            select: { proprietaireId: true },
        });
        if (!cotisation) {
            return {
                status: false,
                message: 'Cotisation non trouvée',
            };
        }
        if (cotisation.proprietaireId !== userId) {
            return {
                status: false,
                message: 'Seul le propriétaire peut générer un code d\'invitation',
            };
        }

        // Générer un code unique (8 caractères alphanumériques)
        const inviteCode = Math.random().toString(36).substring(2, 10).toUpperCase();

        // Mettre à jour la cotisation avec le nouveau code
        const updatedCotisation = await this.prisma.cotisation.update({
            where: { id: cotisationId },
            data: { inviteCode },
            select: {
                id: true,
                nom: true,
                inviteCode: true,
            },
        });

        return {
            status: true,
            message: 'Code d\'invitation généré avec succès',
            data: updatedCotisation,
        };
    }

    // Rejoindre une cotisation via code d'invitation
    async joinCotisation(inviteCode: string, userId: string) {
        // Trouver la cotisation avec ce code
        const cotisation = await this.prisma.cotisation.findUnique({
            where: {
                inviteCode: inviteCode,
                deletedAt: null,
            },
            select: {
                id: true,
                nom: true,
                proprietaireId: true,
                membres: {
                    where: { userId: userId, deletedAt: null },
                },
            },
        });

        if (!cotisation) {
            return {
                status: false,
                message: 'Code d\'invitation invalide ou cotisation supprimée',
            };
        }

        // Vérifier si l'utilisateur est déjà membre
        if (cotisation.membres.length > 0) {
            return {
                status: false,
                message: 'Vous êtes déjà membre de cette cotisation',
            };
        }

        // Récupérer les informations de l'utilisateur
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { username: true, email: true },
        });

        if (!user) {
            return {
                status: false,
                message: 'Utilisateur non trouvé',
            };
        }

        // Ajouter l'utilisateur comme membre
        const membre = await this.prisma.membre.create({
            data: {
                nom: user.username,
                email: user.email,
                role: 'MEMBER',
                userId: userId,
                cotisationId: cotisation.id,
            },
            select: {
                id: true,
                nom: true,
                role: true,
                cotisation: {
                    select: {
                        id: true,
                        nom: true,
                    },
                },
            },
        });

        return {
            status: true,
            message: 'Vous avez rejoint la cotisation avec succès',
            data: membre,
        };
    }

    // Supprimer un paiement
    async deletePaiement(paiementId: string, userId: string) {
        // Vérifier que le paiement existe et récupérer le propriétaire de la cotisation
        const paiement = await this.prisma.payment.findUnique({
            where: { id: paiementId },
            include: {
                cotisation: {
                    select: { proprietaireId: true }
                }
            }
        });

        if (!paiement) {
            return {
                status: false,
                message: 'Paiement non trouvé',
            };
        }

        if (paiement.cotisation.proprietaireId !== userId) {
            return {
                status: false,
                message: 'Seul le propriétaire de la cotisation peut supprimer un paiement',
            };
        }

        // Soft delete du paiement
        await this.prisma.payment.update({
            where: { id: paiementId },
            data: {
                deletedAt: new Date(),
            },
        });

        return {
            status: true,
            message: 'Paiement supprimé avec succès',
        };
    }
}