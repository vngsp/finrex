'use client';
import { incomeData } from '../data/incomeData';
import { spendingData } from '../data/spendingData';
import RevenueForm from './RevenueForm';

const Revenue = () => {
  return (
    <div className='flex flex-col bg-white'>
      <RevenueForm data={incomeData} secondData={spendingData} />
    </div>
  );
};

export default Revenue;
