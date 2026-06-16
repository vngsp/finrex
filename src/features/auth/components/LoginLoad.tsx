import { Box, CircularProgress, Typography } from '@mui/material';

type Props = {
	label: string;
};
const LoginLoad = ({ label }: Props) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				inset: 0,
				zIndex: 50,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'rgba(255,255,255,0.8)',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 2,
				}}
			>
				<CircularProgress sx={{ color: 'primary.main' }} size={48} />
				<Typography variant={'caption'} sx={{ color: 'textSecondary' }}>
					{label}
				</Typography>
			</Box>
		</Box>
	);
};

export default LoginLoad;
