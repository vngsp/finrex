import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import {
	useIncomeValues,
	useSpendingValues,
} from '@/features/auth/utils/mutations';
import DefaultInput from '@/features/revenue/components/DefaultInput';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';
import { incomeSchema, type incomeSchemaType } from '../schemas/incomeSchema';
import {
	spendingSchema,
	type spendingSchemaType,
} from '../schemas/spendingSchema';
import type { transactionsItens } from '../types/transactionsItens';

type Props = {
	data: transactionsItens[];
	secondData: transactionsItens[];
};

const RevenueForm = ({ data, secondData }: Props) => {
	const incomeForm = useForm<incomeSchemaType>({
		resolver: zodResolver(incomeSchema),
		defaultValues: {
			MainIncome: undefined,
			Freelance: undefined,
			Benefits: undefined,
			BusinessProfit: undefined,
			Other: undefined,
		},
	});

	const spendingForm = useForm<spendingSchemaType>({
		resolver: zodResolver(spendingSchema),
		defaultValues: {
			Transportation: undefined,
			Rent: undefined,
			Groceries: undefined,
			Utilities: undefined,
			Entertainment: undefined,
		},
	});

	const addIncomeValues = useIncomeValues();
	const addSpendingValues = useSpendingValues();

	const handleFormsSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const currentDate = new Date().toISOString().split('T')[0];
		const incomeValid = { ...incomeForm.getValues(), Date: currentDate };
		const spendingValid = { ...spendingForm.getValues(), Date: currentDate };

		if (!incomeValid || !spendingValid) {
			return;
		}

		try {
			await Promise.all([
				addIncomeValues.mutateAsync(incomeValid),
				addSpendingValues.mutateAsync(spendingValid),
			]);
			console.log('Submission successful!');
			incomeForm.reset();
			spendingForm.reset();
		} catch (err) {
			console.log('Submission error:', err);
		}
	};

	return (
		<Box component="form" onSubmit={handleFormsSubmit}>
			<Box
				sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}
			>
				<Box>
					<TitleAndSubtitle
						title={'Monthly Income'}
						subTitle={'Log your income'}
					/>
					{data.map((input) => (
						<DefaultInput
							key={input.name}
							name={input.name as keyof incomeSchemaType}
							label={input.label}
							control={incomeForm.control}
							inputIcon
						/>
					))}
				</Box>
				<Box sx={{ pl: 3 }}>
					<TitleAndSubtitle
						title={'Monthly Spending'}
						subTitle={'Record your expenses'}
					/>
					{secondData.map((input) => (
						<DefaultInput
							key={input.name}
							name={input.name as keyof incomeSchemaType}
							label={input.label}
							control={incomeForm.control}
							inputIcon
						/>
					))}
				</Box>
			</Box>
			<input type="submit" style={{ display: 'none' }} />
		</Box>
	);
};

export default RevenueForm;
