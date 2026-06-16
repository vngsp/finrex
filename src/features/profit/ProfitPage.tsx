import { Box, Stack } from '@mui/material';
import ProfitGraph from '@/features/profit/components/ProfitGraph';
import SavingsTable from '@/features/profit/components/SavingsTable';
import TopEarnMonths from '@/features/profit/components/TopEarnMonths';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';

const Page = () => {
	return (
		<Stack>
			<Box
				sx={{ mb: 12, borderBottom: 1, borderColor: 'text.disabled', pb: 10 }}
			>
				<Stack
					direction="row"
					alignItems="center"
					gap={20}
					py={4}
					sx={{ textWrap: 'nowrap' }}
				>
					<Stack>
						<TitleAndSubtitle
							title={'Top Earning Months'}
							subTitle={'Best earnings months'}
						/>
						<TopEarnMonths />
					</Stack>
					<ProfitGraph width={'906px'} height={'260px'} />
				</Stack>
			</Box>

			<Box>
				<TitleAndSubtitle
					title={'Highest Savings'}
					subTitle={'Your highest debt savings'}
				/>
				<SavingsTable />
			</Box>
		</Stack>
	);
};

export default Page;
