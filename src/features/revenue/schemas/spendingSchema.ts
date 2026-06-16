import * as z from 'zod/v4';

export const spendingSchema = z.object({
	Transportation: z.number().gte(0),
	Rent: z.number().gte(0),
	Groceries: z.number().gte(0),
	Utilities: z.number().gte(0),
	Entertainment: z.number().gte(0),
	Date: z.string(),
});

export type spendingSchemaType = z.infer<typeof spendingSchema>;
