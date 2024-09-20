import { Controller, Get } from '@nestjs/common';
import { AbutechBatchService } from './abutech-batch.service';

@Controller()
export class AbutechBatchController {
  constructor(private readonly abutechBatchService: AbutechBatchService) {}

  @Get()
  getHello(): string {
    return this.abutechBatchService.getHello();
  }
}
