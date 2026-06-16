import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const LinesLogin = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 160,
				left: 800,
				width: 384,
				borderRadius: '6px',
				bgcolor: 'background.default',
				p: 2.5,
				boxShadow: 3,
			}}
		>
			<Image
				src="/linesAnalytics-removebg-preview.png"
				alt=""
				width={340}
				height={200}
				style={{ width: '100%', height: 'auto' }}
			/>
			<Typography fontWeight={700} color="primary.main">
				Get your personal analitics
			</Typography>
		</Box>
	);
};

export default LinesLogin;
