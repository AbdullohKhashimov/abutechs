import { NestFactory } from '@nestjs/core';
import { AbutechBatchModule } from './abutech-batch.module';

async function bootstrap() {
	const app = await NestFactory.create(AbutechBatchModule);
	await app.listen(process.env.PORT_BATCH ?? 4001);
}
bootstrap();
