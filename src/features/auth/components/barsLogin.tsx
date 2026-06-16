import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const BarsLogin = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 356,
				left: 1060,
				height: 200,
				width: 200,
				border: 3,
				borderColor: 'yellow.main',
				borderRadius: '6px',
			}}
		>
			<Image src="/barAnalytic-removebg-preview.png" alt="" />
			<Typography
				variant="body2"
				sx={{ position: 'relative', bottom: 24, ml: 0.5 }}
			>
				Track Your Progrees
			</Typography>
		</Box>
	);
};

export default BarsLogin;
