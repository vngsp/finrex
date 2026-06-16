'use client';

import { Box } from '@mui/material';
import { useContext } from 'react';
import Calendar from '@/features/insights/components/Calendar';
import CalendarShowBtn from '@/features/insights/components/CalendarShowBtn';
import { CalendarContext } from '@/features/insights/contexts/CalendarContext';

const CalendarLogicWrapper = () => {
	const ctx = useContext(CalendarContext);

	return (
		<Box>
			<Box>
				<CalendarShowBtn />
			</Box>
			<Box>{ctx?.showCalendar && <Calendar />}</Box>
		</Box>
	);
};

export default CalendarLogicWrapper;
