import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { BridgeModule } from './bridge/bridge.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot(), //-> abutech api server module da environmental variabllarni ishga tushurib beradi
		GraphQLModule.forRoot({
			driver: ApolloDriver, // -> graphql playground ni ishga tushiramiz quyidagi codelar bn
			playground: true,
			uploads: false,
			autoSchemaFile: true,
		}),
		BridgeModule,
		DatabaseModule,
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
