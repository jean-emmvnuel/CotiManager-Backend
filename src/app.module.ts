import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CotisationModule } from './cotisation/cotisation.module';
import { PrismaModule } from './prisma.module';
import { SyncModule } from './sync/sync.module';
import { NotificationModule } from './notifications/notification.module';


@Module({
  imports: [AuthModule, CotisationModule, PrismaModule, SyncModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
