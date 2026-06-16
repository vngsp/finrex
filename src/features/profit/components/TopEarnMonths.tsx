import { Box } from '@mui/material';
import GrowthIndicator from '@/features/profit/components/GrowthIndicator';

const TopEarnMonths = () => {
	return (
		<Box
			sx={{
				mb: 6,
				display: 'flex',
				flexDirection: 'column',
				gap: 1.5,
				color: 'textPrimary',
			}}
		>
			<GrowthIndicator month={'April'} percentage={11} />
			<GrowthIndicator month={'May'} percentage={25} />
			<GrowthIndicator month={'June'} percentage={60} />
		</Box>
	);
};

export default TopEarnMonths;
