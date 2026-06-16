import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import ProfitTableRow from '@/features/profit/components/ProfitTableRow';

const cellSx = { color: 'primary.main', fontWeight: 600 };

const SavingsTable = () => {
	return (
		<TableContainer sx={{ mb: 6, width: '91.666667%' }}>
			<Table
				sx={{
					borderCollapse: 'separate',
					borderSpacing: 0,
					textAlign: 'center',
				}}
			>
				<TableHead>
					<TableRow sx={{ bgcolor: 'text.disabled' }}>
						<TableCell sx={cellSx}>Month</TableCell>
						<TableCell sx={cellSx}>Saved ($)</TableCell>
						<TableCell sx={cellSx}>Saved (%)</TableCell>
						<TableCell sx={cellSx}>Previous Spending ($)</TableCell>
						<TableCell sx={cellSx}>Current Spending ($)</TableCell>
						<TableCell sx={cellSx}>3-Month Avg Spending ($)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<ProfitTableRow
						month={'April'}
						savedValue={200}
						savedPercentage={25}
						previousSpending={800}
						currentSpending={600}
						color={'#4DA1D8'}
					/>
					<ProfitTableRow
						month={'June'}
						savedValue={100}
						savedPercentage={8}
						previousSpending={1200}
						currentSpending={1100}
						color={'#e879a0'}
					/>
					<ProfitTableRow
						month={'October'}
						savedValue={250}
						savedPercentage={26}
						previousSpending={950}
						currentSpending={700}
						color={'#f7a14d'}
					/>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SavingsTable;
