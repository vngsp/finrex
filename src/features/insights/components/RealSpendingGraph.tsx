import { Box, Stack, Typography } from '@mui/material';
import Bar from '@/features/insights/components/Bar';

type Props = {
	title: string;
	subTitle: string;
	value: number;
	barColor?: string;
};

const RealSpendingGraph = ({ title, subTitle, value, barColor }: Props) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			sx={{ my: 2, color: 'text.primary' }}
		>
			<Box>
				<Typography variant="body2" fontWeight={600}>
					{title}
				</Typography>
				<Typography
					variant="body2"
					color="text.disabled"
					sx={{ mt: -0.75, textWrap: 'nowrap' }}
				>
					{subTitle}
				</Typography>
			</Box>
			<Bar color={barColor || '#ff0000'} />
			<Typography fontWeight={700}>${value}</Typography>
		</Stack>
	);
};

export default RealSpendingGraph;
