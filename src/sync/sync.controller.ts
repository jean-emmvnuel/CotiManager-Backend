import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { SyncService } from './sync.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Sync')
@Controller('sync')
export class SyncController {
    constructor(private readonly syncService: SyncService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiQuery({ name: 'since', required: false, type: String, description: 'ISO-8601 Timestamp of last sync' })
    sync(@Request() req, @Query('since') since?: string) {
        return this.syncService.sync(req.user.sub, since ? new Date(since) : undefined);
    }
}
