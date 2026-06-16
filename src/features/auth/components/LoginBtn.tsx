import { Button, Typography } from '@mui/material';

type Props = {
	hasLoggedIn: boolean;
	disabled?: boolean;
};

const LoginBtn = ({ hasLoggedIn, disabled }: Props) => {
	return (
		<Button
			type="submit"
			disabled={disabled}
			fullWidth
			sx={{
				background: 'linear-gradient(to right,#5dbc75, #87d9a0, #b2ecc0)',
				color: 'text.primary',
				fontWeight: 'bold',
				fontSize: '1.25rem',
				borderRadius: 2,
				'&:hover': {
					opacity: 0.9,
					background: 'linear-gradient(to right,#5dbc75, #87d9a0, #b2ecc0)',
				},
				'&.Mui-disabled': {
					opacity: 0.7,
					background: 'linear-gradient(to right,#5dbc75, #87d9a0, #b2ecc0)',
					color: 'text.primary',
				},
			}}
		>
			<Typography color={'textPrimary'} variant={'button'}>
				{!hasLoggedIn ? 'Login' : 'Sign up'}
			</Typography>
		</Button>
	);
};

export default LoginBtn;
