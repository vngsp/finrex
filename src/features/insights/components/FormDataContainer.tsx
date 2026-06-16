'use client';
import { Box } from '@mui/material';
import CalendarLogicWrapper from '@/features/insights/components/CalendarLogicWrapper';
import FormDataGraph from '@/features/insights/components/FormDataGraph';
import GraphExhibition from '@/features/insights/components/GraphExhibition';
import { CalendarProvider } from '@/features/insights/contexts/CalendarContext';
import { GraphProvider } from '@/features/insights/contexts/GraphContext';

type Props = {
	graphSelection: boolean;
	showCalendar?: boolean;
};

const FormDataContainer = ({ graphSelection, showCalendar }: Props) => {
	return (
		<Box sx={{ mt: 5 }}>
			{showCalendar && (
				<CalendarProvider>
					<CalendarLogicWrapper />
				</CalendarProvider>
			)}
			<GraphProvider>
				<FormDataGraph />
				{graphSelection && <GraphExhibition />}
			</GraphProvider>
		</Box>
	);
};

export default FormDataContainer;
