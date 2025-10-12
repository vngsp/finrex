'use client';

import { CalendarContext } from '@/app/(realApp)/insights/contexts/CalendarContext';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { useContext } from 'react';

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

      <div className='absolute z-10 mt-2 h-auto w-96 rounded-lg border border-gray-200 bg-white p-4 shadow-xl'>
        <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' titleFormat={() => ''} />
      </div>
    </>
  );
};

export default Calendar;
