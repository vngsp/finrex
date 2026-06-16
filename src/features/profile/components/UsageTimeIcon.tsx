import { Box, Typography } from '@mui/material';

type Props = {
	monthsUsed: number;
	positionY: number;
	positionX: number;
};

const UsageTimeIcon = ({ monthsUsed, positionY, positionX }: Props) => {
	return (
		<Box
			sx={{
				position: 'relative',
				display: 'flex',
				height: 24,
				width: 64,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '12px',
				bgcolor: 'primary.main',
				px: 1.5,
				top: positionY,
				left: positionX,
			}}
		>
			<Typography
				sx={{
					fontSize: 12,
					fontWeight: 700,
					textWrap: 'nowrap',
					color: 'purple.main',
				}}
			>
				{monthsUsed} months
			</Typography>
		</Box>
	);
};

export default UsageTimeIcon;
