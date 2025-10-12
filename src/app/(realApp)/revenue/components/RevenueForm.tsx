'use client';
import { useForm } from 'react-hook-form';
import DefaultInput from './DefaultInput';
import { revenueSchema, revenueSchemaType } from '../schemas/revenueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { incomeItem } from '../types/incomeType';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';
import { useRevenueValues } from '@/features/login/utils/mutations';

type Props = {
  data: incomeItem[];
  secondData: incomeItem[];
};

const RevenueForm = ({ data, secondData }: Props) => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(revenueSchema),
    defaultValues: {
      mainIncome: undefined,
      freelance: undefined,
      benefits: undefined,
      businessProfit: undefined,
      other: undefined,
      transportation: undefined,
      rent: undefined,
      groceries: undefined,
      utilities: undefined,
      entertainment: undefined,
    },
  });

  const addRevenueValues = useRevenueValues();

  const handleFormSubmit = async (data: revenueSchemaType) => {
    try {
      await addRevenueValues.mutateAsync(data);
    } catch {
      console.log('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className='grid grid-cols-2'>
          <div className='mr-22 border-r border-[var(--lines-color)]'>
            <TitleAndSubtitle title='Monthly income' subTitle='Log your income' />
            {data.map(input => (
              <DefaultInput
                key={input.name}
                name={input.name as keyof revenueSchemaType}
                control={control}
                label={input.label}
                inputIcon={true}
              />
            ))}
          </div>
          <div className='pl-6'>
            <TitleAndSubtitle title='Monthly Spending' subTitle='Record your expenses' />
            {secondData.map(input => (
              <DefaultInput
                key={input.name}
                name={input.name as keyof revenueSchemaType}
                control={control}
                label={input.label}
                inputIcon={true}
              />
            ))}
          </div>
        </div>
        <input type='submit' className='hidden' />
      </form>
    </div>
  );
};

export default RevenueForm;
