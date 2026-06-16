import * as z from 'zod/v4';

export const incomeSchema = z.object({
	MainIncome: z.number().gte(0),
	Freelance: z.number().gte(0),
	Benefits: z.number().gte(0),
	BusinessProfit: z.number().gte(0),
	Other: z.number().gte(0),
	Date: z.string(),
});
export type incomeSchemaType = z.infer<typeof incomeSchema>;
