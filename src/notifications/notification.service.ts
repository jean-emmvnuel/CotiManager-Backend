import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
    private readonly logger = new Logger(NotificationService.name);

    async sendPush(tokens: string[], message: { title: string; body: string; data?: any }) {
        this.logger.log(`Envoi de notification à ${tokens.length} appareils: ${message.title}`);

        if (message.data) {
            this.logger.debug(`Données de notification: ${JSON.stringify(message.data)}`);
        }

        // Ici, vous pourriez intégrer OneSignal, Firebase Cloud Messaging, etc.
        // Exemple avec OneSignal ou FCM...

        // Pour l'instant, nous simulons l'envoi
        tokens.forEach(token => {
            this.logger.debug(`Notification envoyée au token : ${token.substring(0, 10)}...`);
        });

        return { status: 'sent', count: tokens.length };
    }
}
