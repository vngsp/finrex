import * as z from 'zod/v4';

export const revenueSchema = z.object({
	MainIncome: z.number().gt(0),
	Freelance: z.number().gt(0),
	Benefits: z.number().gt(0),
	BusinessProfit: z.number().gt(0),
	Other: z.number().gt(0),
	Transportation: z.number().gt(0),
	Rent: z.number().gt(0),
	Groceries: z.number().gt(0),
	Utilities: z.number().gt(0),
	Entertainment: z.number().gt(0),
});

export type revenueSchemaType = z.infer<typeof revenueSchema>;
