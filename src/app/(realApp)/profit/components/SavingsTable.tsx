import TableRow from '@/app/(realApp)/profit/components/TableRow';

const SavingsTable = () => {
  return (
    <table className={'mb-12 w-11/12 border-separate border-spacing-0 text-center text-lg'}>
      <thead>
        <tr className={'bg-[var(--desactive-color)] text-[var(--green-theme)]'}>
          <th className={'rounded-tl-md p-3'}>Month</th>
          <th className={'p-3'}>Saved ($)</th>
          <th className={'p-3'}>Saved (%)</th>
          <th className={'p-3'}>Previous Spending ($)</th>
          <th className={'p-3'}>Current Spending ($)</th>
          <th className={'rounded-tr-md p-3'}>3-Month Avg Spending ($)</th>
        </tr>
      </thead>
      <tbody>
        <TableRow month={'April'} savedValue={200} savedPercentage={25} previousSpending={800} currentSpending={600} />
        <TableRow month={'April'} savedValue={200} savedPercentage={25} previousSpending={800} currentSpending={600} />
        <TableRow month={'April'} savedValue={200} savedPercentage={25} previousSpending={800} currentSpending={600} />
      </tbody>
    </table>
  );
};

export default SavingsTable;
