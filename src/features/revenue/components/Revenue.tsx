import { Stack } from '@mui/material';
import { incomeData } from '../data/incomeData';
import { spendingData } from '../data/spendingData';
import RevenueForm from './RevenueForm';

const Revenue = () => {
	return (
		<Stack bgcolor="background.paper">
			<RevenueForm data={incomeData} secondData={spendingData} />
		</Stack>
	);
};

export default Revenue;
