import { Box } from '@mui/material';
import FromDataGraph from '@/features/insights/components/FormDataContainer';
import LastMonth from '@/features/insights/components/LastMonth';
import RealSpendingGraph from '@/features/insights/components/RealSpendingGraph';
import Summary from '@/shared/components/Summary';
import TitleAndSubtitle from '@/shared/components/TitleAndSubtitle';

const Page = () => {
	return (
		<Box
			sx={{
				display: 'grid',
				gridTemplateColumns: 'repeat(3, 1fr)',
				alignItems: 'start',
				gap: 2,
			}}
		>
			<Box sx={{ gridColumn: 'span 2', gridRow: '1' }}>
				<Box>
					<TitleAndSubtitle
						title="Your Profit"
						subTitle="From savings to success"
					/>
				</Box>
				<Box sx={{ gridRow: 'span 2' }}>
					<FromDataGraph graphSelection={true} showCalendar={true} />
				</Box>
			</Box>

			<Box
				component="aside"
				sx={{ mb: 2.5, borderLeft: 1, borderColor: 'text.disabled', px: 8 }}
			>
				<Box>
					<TitleAndSubtitle
						title="In Money"
						subTitle="Real Spending"
						hasLine={true}
					/>
					<RealSpendingGraph
						title={'Transportation'}
						subTitle={'Bus, car, boat'}
						value={300}
						barColor={'#4DA1D8'}
					/>
					<RealSpendingGraph
						title={'Rent'}
						subTitle={'Apartment, house'}
						value={1700}
						barColor={'#F2858E'}
					/>
					<RealSpendingGraph
						title={'Groceries'}
						subTitle={'Food, drinks'}
						value={400}
						barColor={'#FFB86B'}
					/>
					<RealSpendingGraph
						title={'Entertainment'}
						subTitle={'Movies, concerts'}
						value={220}
						barColor={'#2EBCB3'}
					/>
				</Box>
				<Box sx={{ mt: 4 }}>
					<TitleAndSubtitle
						title="Vs Last Month"
						subTitle="Monthly Comparison"
						hasLine={true}
					/>
					<LastMonth />
					<Summary
						title={'Summary'}
						cubeSize={'23px'}
						fontSize={'16px'}
						titleFontSize={'16px'}
						backgroundColor={'#4DA1D8'}
						arrowDirection={'up'}
						pastValue={80}
						currentValue={200}
						summaryName={'Transport:'}
					/>
					<Summary
						arrowDirection={'down'}
						backgroundColor={'#F2858E'}
						cubeSize={'23px'}
						fontSize={'16px'}
						titleFontSize={'16px'}
						pastValue={300}
						currentValue={450}
						summaryName={'Rent:'}
					/>
					<Summary
						arrowDirection={'even'}
						backgroundColor={'#f2d77d'}
						cubeSize={'23px'}
						fontSize={'16px'}
						titleFontSize={'16px'}
						pastValue={300}
						currentValue={300}
						summaryName={'Groceries:'}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default Page;
