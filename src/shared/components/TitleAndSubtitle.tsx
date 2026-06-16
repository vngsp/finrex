import { Typography } from '@mui/material';

type Props = {
	title: string;
	subTitle: string;
	hasLine?: boolean;
};

const TitleAndSubtitle = ({ title, subTitle, hasLine }: Props) => {
	return (
		<>
			<Typography variant="h5" fontWeight={600} color="text.primary">
				{title}
			</Typography>
			<Typography
				variant="body2"
				sx={{
					mt: -0.125,
					mb: 5,
					color: 'primary.main',
					...(hasLine && {
						borderBottom: 1,
						borderColor: 'primary.main',
						pb: 5,
					}),
				}}
			>
				{subTitle}
			</Typography>
		</>
	);
};

export default TitleAndSubtitle;
