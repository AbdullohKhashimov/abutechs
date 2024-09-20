import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';

@Module({
	imports: [
		ConfigModule.forRoot(), //-> abutech api server module da environmental variabllarni ishga tushurib beradi
		GraphQLModule.forRoot({
			driver: ApolloDriver, // -> graphql playground ni ishga tushiramiz quyidagi codelar bn
			playground: true,
			uploads: false,
			autoSchemaFile: true,
		}),
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
