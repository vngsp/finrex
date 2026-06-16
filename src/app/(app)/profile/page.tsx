import { Box, Stack } from '@mui/material';
import PersonalForm from '@/features/profile/components/PersonalForm';
import UsageGraph from '@/features/profile/components/UsageGraph';
import Summary from '@/shared/components/Summary';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';

const Page = () => {
	return (
		<Stack direction="row">
			<Box sx={{ width: '33.33%' }}>
				<PersonalForm />
			</Box>
			<Box sx={{ mt: 4, ml: -6, width: '66.67%' }}>
				<TitleAndSubtitle
					title={'Usage Over Time'}
					subTitle={'Track your progress and engagement with the platform'}
				/>
				<UsageGraph />
				<Box sx={{ ml: 1 }}>
					<Summary
						pastValue={400}
						currentValue={400}
						summaryName={'Net Profit:'}
						growthPercentage={0}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'#4DA1D8'}
						cubeSize={'24px'}
						arrowDirection={'even'}
						arrowSize={'28px'}
					/>
					<Summary
						pastValue={100}
						currentValue={300}
						summaryName={'Money Saved:'}
						growthPercentage={200}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'#F2858E'}
						cubeSize={'24px'}
						arrowDirection={'up'}
						arrowSize={'28px'}
					/>
					<Summary
						pastValue={1000}
						currentValue={130}
						summaryName={'Savings Growth:'}
						growthPercentage={87}
						bottom={'20px'}
						fontSize={'18px'}
						titleFontSize={'20px'}
						backgroundColor={'#FFB86B'}
						cubeSize={'24px'}
						arrowDirection={'down'}
						arrowSize={'28px'}
					/>
				</Box>
			</Box>
		</Stack>
	);
};

export default Page;
