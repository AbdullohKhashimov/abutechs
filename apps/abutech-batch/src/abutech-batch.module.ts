import { Module } from '@nestjs/common';
import { AbutechBatchController } from './abutech-batch.controller';
import { AbutechBatchService } from './abutech-batch.service';

@Module({
  imports: [],
  controllers: [AbutechBatchController],
  providers: [AbutechBatchService],
})
export class AbutechBatchModule {}
