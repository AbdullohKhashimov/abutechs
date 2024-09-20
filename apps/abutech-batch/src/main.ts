import { NestFactory } from '@nestjs/core';
import { AbutechBatchModule } from './abutech-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(AbutechBatchModule);
  await app.listen(3000);
}
bootstrap();
