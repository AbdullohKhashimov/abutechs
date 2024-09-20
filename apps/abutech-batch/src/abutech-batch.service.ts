import { Injectable } from '@nestjs/common';

@Injectable()
export class AbutechBatchService {
	getHello(): string {
		return 'This is Abutech Batch server!';
	}
}
