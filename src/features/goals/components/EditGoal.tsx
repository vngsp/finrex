import { Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

type Props = {
	onClick: () => void;
};

const EditGoal = ({ onClick }: Props) => {
	return (
		<IconButton onClick={onClick} size="small">
			<Edit />
		</IconButton>
	);
};

export default EditGoal;
