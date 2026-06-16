import {Stack, Typography} from '@mui/material';
import TripleUpArrow from '@/features/profit/components/icons/TripleUpArrow.svg';

type Props = {
	month: string;
	percentage: number;
};

const GrowthIndicator = ({ month, percentage }: Props) => {
	return (
		<Stack direction={'row'} alignItems={'center'} spacing={1}>
			<Typography variant="h6">{month}</Typography>
			<Typography variant="h5">+{percentage}%</Typography>
			<TripleUpArrow />
		</Stack>
	);
};

export default GrowthIndicator;
