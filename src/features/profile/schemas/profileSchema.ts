import * as z from 'zod/v4';

export const profileSchema = z.object({
	username: z.string().min(3).max(20),
	age: z.number().min(18).max(120),
	business: z.string().min(3).max(20),
	salary: z.number().max(400000),
	jobTitle: z.string().min(3).max(20),
	financesGoal: z.string().min(3).max(20),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
