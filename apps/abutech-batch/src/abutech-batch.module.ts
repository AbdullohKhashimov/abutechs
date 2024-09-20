import { Module } from '@nestjs/common';
import { AbutechBatchController } from './abutech-batch.controller';
import { AbutechBatchService } from './abutech-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AbutechBatchController],
  providers: [AbutechBatchService],
})
export class AbutechBatchModule {}
