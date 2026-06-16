import { Typography } from '@mui/material';

type Props = {
	hasLoggedIn: boolean;
	toggleLogged: () => void;
};
const HaveAccount = ({ hasLoggedIn, toggleLogged }: Props) => {
	return (
		<Typography
			onClick={toggleLogged}
			variant={'caption'}
			fontWeight={'bold'}
			sx={{ cursor: 'pointer' }}
		>
			{!hasLoggedIn ? `Don't have an account?` : 'Already have an account?'}
			<Typography
				component={'span' as const}
				variant={'caption'}
				fontWeight={'bold'}
				sx={{ cursor: 'pointer', ml: 0.5, color: 'purple.main' }}
			>
				{!hasLoggedIn ? 'Sign up' : 'Login'}
			</Typography>
		</Typography>
	);
};

export default HaveAccount;
