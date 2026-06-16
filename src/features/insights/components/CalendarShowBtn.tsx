import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { CalendarContext } from '@/features/insights/contexts/CalendarContext';
import CalendarArrow from './icons/CalendarArrow.svg';

const CalendarShowBtn = () => {
	const ctx = useContext(CalendarContext);

	const handleGraphBtn = () => {
		ctx?.setShowCalendar(!ctx?.showCalendar);
	};

	return (
		<Stack
			component="button"
			direction="row"
			alignItems="center"
			gap={1}
			onClick={handleGraphBtn}
			sx={{ background: 'none', border: 'none', cursor: 'pointer', p: 0 }}
		>
			<Typography variant="h5" fontWeight={600} color="text.primary">
				From August to September
			</Typography>
			<CalendarArrow style={{ height: 24, width: 24 }} />
		</Stack>
	);
};

export default CalendarShowBtn;
