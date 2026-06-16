import { Box } from '@mui/material';

type Props = {
	color: string;
};

const Bar = ({ color }: Props) => {
	return <Box sx={{ flex: 1, mx: 3.5, height: 4, bgcolor: color }} />;
};

export default Bar;
