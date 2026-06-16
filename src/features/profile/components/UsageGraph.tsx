'use client';
import { Box } from '@mui/material';
import {
	CategoryScale,
	Chart,
	LinearScale,
	LineController,
	LineElement,
	PointElement,
} from 'chart.js';
import { useEffect, useRef } from 'react';

Chart.register([
	CategoryScale,
	LineController,
	LineElement,
	LinearScale,
	PointElement,
]);

const UsageGraph = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const ctx = canvasRef.current;
		if (!ctx) return;

		const blueGraph = '#4DA1D8';
		const pinkGraph = '#F2858E';
		const orangeGraph = '#FFB86B';

		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['1', '2', '3'],
				datasets: [
					{
						data: [2000, 400, 2010],
						backgroundColor: blueGraph,
						borderColor: blueGraph,
						borderWidth: 8,
						pointRadius: 0,
					},
					{
						data: [3000, 800, 1000],
						backgroundColor: pinkGraph,
						borderColor: pinkGraph,
						borderWidth: 8,
						pointRadius: 0,
					},
					{
						data: [1000, 200, 500],
						backgroundColor: orangeGraph,
						borderColor: orangeGraph,
						borderWidth: 8,
						pointRadius: 0,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
				},
			},
		});
		return () => {
			myChart.destroy();
		};
	}, []);

	return (
		<Box sx={{ height: 300 }}>
			<canvas ref={canvasRef}></canvas>
		</Box>
	);
};

export default UsageGraph;
