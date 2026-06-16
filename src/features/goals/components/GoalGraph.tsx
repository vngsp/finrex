import { Box } from '@mui/material';
import type { ChartData, ChartOptions } from 'chart.js';
import FloatPercent from '@/features/goals/components/FloatPercent';
import FormDataGraph from '@/features/insights/components/FormDataGraph';
import { GraphProvider } from '@/features/insights/contexts/GraphContext';

type Props = {
	completePercent?: number;
	remainingPercent?: number;
	customOptions?: ChartOptions;
	customData?: ChartData<'doughnut'>;
};

const GoalGraph = ({
	completePercent,
	remainingPercent,
	customOptions,
	customData,
}: Props) => {
	return (
		<GraphProvider initialStyle={'doughnut'}>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<FloatPercent
					percent={completePercent}
					color={'#5dbc75'}
					barRotation={130}
					orientationX={165}
					orientationY={10}
				/>
				<FormDataGraph
					height={200}
					width={200}
					chartOptions={customOptions}
					chartData={customData}
				/>
				<FloatPercent
					percent={remainingPercent}
					color={'#d1d8e0'}
					barRotation={60}
					orientationX={5}
					orientationY={20}
				/>
			</Box>
		</GraphProvider>
	);
};

export default GoalGraph;
