import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
	@Query(() => String)
	public sayHi(): string {
		return 'GraphQL API server';
	}
}
