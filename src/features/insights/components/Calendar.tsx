'use client';

import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { CalendarContext } from '@/features/insights/contexts/CalendarContext';

const Calendar = () => {
	const ctx = useContext(CalendarContext);

	if (!ctx?.showCalendar) return null;

	return (
		<>
			<style>
				{`
                    .fc .fc-button {
                        background-color: #A25BAE;
                        color: white;
                        border: none;
                        cursor: pointer;
                        transition: background-color 0.2s ease-in-out;
                        text-transform: capitalize;
                    }

                    .fc .fc-button:hover {
                        background-color: rgba(162,91,174, 0.8);
                    }

                    .fc .fc-button:disabled {
                        background-color: #A25BAE;
                        cursor: not-allowed;
                        opacity: 0.8;
                    }
                    .fc .fc-daygrid-day.fc-day-sun,
                    .fc .fc-daygrid-day.fc-day-sat {
                        background-color: #f5f5f5;
                    }

                    .fc .fc-daygrid-day-frame {
                        background-color: #fff;
                    }

                    .fc .fc-daygrid-day-number {
                        color: #000;
                    }

                    .fc .fc-col-header-cell-cushion {
                        color: #000;
                    }
                `}
			</style>

			<Box
				sx={{
					position: 'absolute',
					zIndex: 10,
					mt: 1,
					width: 384,
					borderRadius: 2,
					border: 1,
					borderColor: 'grey.200',
					bgcolor: 'background.paper',
					p: 2,
					boxShadow: 3,
				}}
			>
				<FullCalendar
					plugins={[dayGridPlugin]}
					initialView="dayGridMonth"
					titleFormat={() => ''}
				/>
			</Box>
		</>
	);
};

export default Calendar;
