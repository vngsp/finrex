'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import BarsLogin from './barsLogin';
import Cubes from './Cubes';
import FormAction from './FormAction';
import LinesLogin from './linesLogin';

const LoginForm = () => {
	return (
		<Stack
			direction="row"
			sx={{ height: '100vh', width: '100vw', justifyContent: 'center' }}
		>
			<Box sx={{ width: '50%', bgcolor: 'background.paper', p: 8 }}>
				<Box>
					<Image src={'/darkLogo.png'} alt="Logo" width={200} height={100} />
				</Box>
				<Box sx={{ mt: 12 }}>
					<FormAction />
				</Box>
			</Box>
			<Stack
				className="btn-gradient"
				sx={{ width: '100%', flexDirection: 'column' }}
			>
				<Stack alignItems="center" justifyContent="center">
					<Cubes position="fixed" top={-4} left={528} />
					<LinesLogin />
					<BarsLogin />
					<Cubes
						position="fixed"
						top={712}
						left={1536}
						rotate="rotate(180deg)"
					/>
				</Stack>
				<Stack
					alignItems="center"
					justifyContent="center"
					sx={{ position: 'relative', top: '35.75rem' }}
				>
					<Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
						Change the way you Manage Your Money
					</Typography>
					<Typography sx={{ width: '15rem', textAlign: 'center' }}>
						Welcome to Finrex — your smart tool for organizing and tracking your
						finances with ease.
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default LoginForm;
