import { TableCell, TableRow } from '@mui/material';
import ProfitGraph from '@/features/profit/components/ProfitGraph';

type Props = {
	month: string;
	savedValue: number;
	savedPercentage: number;
	previousSpending: number;
	currentSpending: number;
	color?: string;
};

const cellSx = {
	borderBottom: '1px solid',
	borderColor: 'primary.main',
	p: 1.5,
	fontWeight: 600,
	color: 'text.primary',
};

const ProfitTableRow = ({
	month,
	savedValue,
	savedPercentage,
	previousSpending,
	currentSpending,
	color,
}: Props) => {
	return (
		<TableRow>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				{month}
			</TableCell>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				{savedValue} $
			</TableCell>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				{savedPercentage} %
			</TableCell>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				{previousSpending} $
			</TableCell>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				{currentSpending} $
			</TableCell>
			<TableCell sx={{ ...cellSx, borderLeftColor: 'primary.main' }}>
				<ProfitGraph
					width={'250px'}
					height={'10px'}
					color={color}
					fill={false}
					minimal={true}
				/>
			</TableCell>
		</TableRow>
	);
};

export default ProfitTableRow;
