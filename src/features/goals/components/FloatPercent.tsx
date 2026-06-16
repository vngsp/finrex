import { Box, Typography } from '@mui/material';

type Props = {
	color?: string;
	percent?: number;
	barRotation?: number;
	orientationX: number;
	orientationY: number;
};

const FloatPercent = ({
	color,
	percent,
	barRotation,
	orientationX,
	orientationY,
}: Props) => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: orientationY,
				left: orientationX,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				color: color,
			}}
		>
			<Typography variant="body2" sx={{ mb: 0.5 }}>
				{percent}%
			</Typography>
			<Box
				sx={{
					height: '1px',
					width: 16,
					background: color,
					transform: `rotate(${barRotation ?? 0}deg)`,
				}}
			/>
		</Box>
	);
};

export default FloatPercent;
