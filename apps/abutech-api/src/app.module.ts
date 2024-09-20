import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()], //-> abutech api server module da environmental variabllarni ishga tushurib beradi
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
