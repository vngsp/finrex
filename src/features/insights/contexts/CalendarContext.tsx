'use client';
import { createContext, type ReactNode, useState } from 'react';

type CalendarContextType = {
	showCalendar: boolean;
	setShowCalendar: (show: boolean) => void;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

type CalendarProviderProps = {
	children: ReactNode;
};

export const CalendarProvider = ({ children }: CalendarProviderProps) => {
	const [showCalendar, setShowCalendar] = useState(false);

	return (
		<CalendarContext.Provider value={{ showCalendar, setShowCalendar }}>
			{children}
		</CalendarContext.Provider>
	);
};
