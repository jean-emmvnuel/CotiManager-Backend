import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SyncService {
    constructor(private readonly prisma: PrismaService) { }

    async sync(userId: string, since?: Date) {
        const dateCondition = since ? { updatedAt: { gt: since } } : {};

        // 1. Cotisations
        const cotisations = await this.prisma.cotisation.findMany({
            where: {
                OR: [
                    { proprietaireId: userId },
                    { membres: { some: { userId: userId } } },
                ],
                ...dateCondition,
            },
        });

        // 2. Membres
        const membres = await this.prisma.membre.findMany({
            where: {
                cotisation: {
                    OR: [
                        { proprietaireId: userId },
                        { membres: { some: { userId: userId } } },
                    ]
                },
                ...dateCondition,
            },
        });

        // 3. Paiements
        const payments = await this.prisma.payment.findMany({
            where: {
                cotisation: {
                    OR: [
                        { proprietaireId: userId },
                        { membres: { some: { userId: userId } } },
                    ]
                },
                ...dateCondition,
            }
        });

        return {
            status: true,
            data: {
                cotisations,
                membres,
                payments
            }
        };
    }
}
