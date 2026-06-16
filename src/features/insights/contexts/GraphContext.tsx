'use client';
import { createContext, type ReactNode, useState } from 'react';

export type ChartStyle = 'bar' | 'doughnut' | 'line';

type GraphContextType = {
	style: ChartStyle;
	setStyle: (style: ChartStyle) => void;
};

export const GraphContext = createContext<GraphContextType | null>(null);

type GraphProviderProps = {
	children: ReactNode;
	initialStyle?: ChartStyle;
};
export const GraphProvider = ({
	children,
	initialStyle,
}: GraphProviderProps) => {
	const [style, setStyle] = useState<ChartStyle>(initialStyle || 'bar');

	return (
		<GraphContext.Provider value={{ style, setStyle }}>
			{children}
		</GraphContext.Provider>
	);
};
