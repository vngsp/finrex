'use client';
import { Box } from '@mui/material';
import {
	CategoryScale,
	Chart,
	Legend,
	LinearScale,
	LineController,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { useEffect, useRef } from 'react';
import resolveColorCss from '@/features/profit/utils/ResolveColorCss';

Chart.register(
	LineController,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
);

type Props = {
	width?: string;
	height?: string;
	color?: string;
	fill?: boolean;
	minimal?: boolean;
};

const ProfitGraph = ({
	width,
	height,
	color,
	fill = true,
	minimal = false,
}: Props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext('2d');
		if (!ctx) return;

		let finalBorderColor: string | CanvasGradient;

		const resolvedColor = color ? resolveColorCss(color) : undefined;

		if (resolvedColor && !resolvedColor.startsWith('var(')) {
			finalBorderColor = resolvedColor;
		} else {
			const gradient = ctx.createLinearGradient(
				0,
				0,
				0,
				canvasRef.current.height,
			);
			gradient.addColorStop(0, '#397A56');
			gradient.addColorStop(0.5, '#418F60');
			gradient.addColorStop(1, '#5DBC75');
			finalBorderColor = gradient;
		}

		const chartData = {
			labels: ['April', 'May', 'June'],
			datasets: [
				{
					data: [1500, 2100, 3000],
					backgroundColor: fill ? 'rgba(93, 188, 117, 0.2)' : 'rgba(0,0,0,0)',
					borderColor: finalBorderColor,
					borderWidth: minimal ? 3 : 14,
					fill: true,
					tension: 0,
					pointRadius: 0,
				},
			],
		};

		const chartOptions = minimal
			? {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							display: false,
						},
						y: {
							display: false,
						},
					},
				}
			: {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							grid: {
								display: true,
							},
						},
						y: {
							grid: {
								display: true,
							},
						},
					},
				};

		const myChart = new Chart(ctx, {
			type: 'line',
			data: chartData,
			options: chartOptions,
		});

		return () => {
			myChart.destroy();
		};
	}, [color, fill, minimal]);

	return (
		<Box sx={{ position: 'relative', width: '100%' }} style={{ width, height }}>
			<canvas ref={canvasRef}></canvas>
		</Box>
	);
};

export default ProfitGraph;
