import { Box } from '@mui/material';
import type { CSSProperties } from 'react';

const ORANGE = '#f7a14d';

type CubeProps = {
	top: number;
	left: number;
	size: number;
	radius: number;
	opacity: number;
};

const Cube = ({ top, left, size, radius, opacity }: CubeProps) => (
	<Box
		sx={{
			position: 'absolute',
			top,
			left,
			height: size,
			width: size,
			borderRadius: `${radius}px`,
			bgcolor: ORANGE,
			opacity,
		}}
	/>
);

type Props = {
	position: CSSProperties['position'];
	top?: number;
	left?: number;
	rotate?: string;
};

const Cubes = ({ position, top, left, rotate }: Props) => {
	return (
		<Box sx={{ position, top, left, transform: rotate }}>
			<Cube top={0} left={0} size={44} radius={6} opacity={0.7} />
			<Cube top={22} left={65} size={24} radius={3} opacity={0.7} />
			<Cube top={70} left={22} size={36} radius={6} opacity={0.6} />
			<Cube top={62} left={90} size={36} radius={6} opacity={0.6} />
			<Cube top={125} left={10} size={12} radius={3} opacity={0.3} />
			<Cube top={10} left={115} size={20} radius={3} opacity={0.7} />
			<Cube top={90} left={68} size={16} radius={3} opacity={0.6} />
			<Cube top={40} left={140} size={20} radius={3} opacity={0.6} />
			<Cube top={40} left={105} size={16} radius={3} opacity={0.6} />
			<Cube top={55} left={2} size={12} radius={3} opacity={0.7} />
			<Cube top={115} left={68} size={16} radius={3} opacity={0.3} />
			<Cube top={105} left={125} size={20} radius={3} opacity={0.6} />
		</Box>
	);
};

export default Cubes;
