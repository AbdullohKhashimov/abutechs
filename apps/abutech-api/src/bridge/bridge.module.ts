import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { NotificationModule } from './notification/notification.module';
import { NoticeModule } from './notice/notice.module';
import { ProductModule } from './product/product.module';

@Module({
	imports: [MemberModule, NotificationModule, NoticeModule, ProductModule],
})
export class BridgeModule {}
