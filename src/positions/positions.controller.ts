import { Controller, Get, Param } from '@nestjs/common';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
    constructor(private readonly positionsService: PositionsService) {}
    @Get('/all')
    getAllPosition() {
        return this.positionsService.getAllPositions();
    }
    @Get('/one/:id')
    getOnePosition(@Param('id') id: string) {
        return this.positionsService.getOnePosition(Number(id));
    }
}
