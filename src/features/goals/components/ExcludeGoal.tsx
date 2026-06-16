import { IconButton } from '@mui/material';
import ExcludeIcon from './icons/ExcludeIcon.svg';

type Props = {
	onClick: () => void;
};

const ExcludeGoal = ({ onClick }: Props) => {
	return (
		<IconButton onClick={onClick} size="small">
			<ExcludeIcon />
		</IconButton>
	);
};

export default ExcludeGoal;
