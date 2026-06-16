'use client';
import { Box, Stack } from '@mui/material';
import { useContext } from 'react';
import {
	type ChartStyle,
	GraphContext,
} from '@/features/insights/contexts/GraphContext';
import BarGraph from './icons/BarGraph.svg';
import PizzaGraph from './icons/PizzaGraph.svg';

const GraphExhibition = () => {
	const ctx = useContext(GraphContext);

	const changeGraph = (style: ChartStyle) => {
		ctx?.setStyle(style);
	};

	return (
		<Stack direction="row" sx={{ mt: 4, gap: 10 }}>
			<Box
				onClick={() => changeGraph('bar')}
				sx={{
					height: 52,
					width: 52,
					cursor: 'pointer',
					color: ctx?.style === 'bar' ? 'primary.main' : 'text.disabled',
					'&:hover': { color: 'primary.main' },
				}}
			>
				<BarGraph />
			</Box>
			<Box
				onClick={() => changeGraph('doughnut')}
				sx={{
					height: 52,
					width: 52,
					cursor: 'pointer',
					color: ctx?.style === 'doughnut' ? 'purple.main' : 'text.disabled',
					'&:hover': { color: 'purple.main' },
				}}
			>
				<PizzaGraph />
			</Box>
		</Stack>
	);
};

export default GraphExhibition;
