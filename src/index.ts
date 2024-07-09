import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export interface Env {
	DATABASE_URL: string
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext) {
		
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate())

		const response = await prisma.log.create({
			data: {
				level: 'info',
				message: 'A new log entry was created',
			},
		})

		console.log(JSON.stringify(response));
		

	},
};
