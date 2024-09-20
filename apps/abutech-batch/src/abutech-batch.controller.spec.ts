import { Test, TestingModule } from '@nestjs/testing';
import { AbutechBatchController } from './abutech-batch.controller';
import { AbutechBatchService } from './abutech-batch.service';

describe('AbutechBatchController', () => {
	let abutechBatchController: AbutechBatchController;

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AbutechBatchController],
			providers: [AbutechBatchService],
		}).compile();

		abutechBatchController = app.get<AbutechBatchController>(AbutechBatchController);
	});

	describe('root', () => {
		it('should return "Hello World!"', () => {
			expect(abutechBatchController.getHello()).toBe('Hello World!');
		});
	});
});
