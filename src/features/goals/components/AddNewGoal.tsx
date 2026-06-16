'use client';
import { Bookmark } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';

type Props = {
	onAddGoal: () => void;
};

const AddNewGoal = ({ onAddGoal }: Props) => {
	return (
		<Card
			variant={'outlined'}
			sx={{
				mb: 4,
				width: 256,
				height: 432,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				borderColor: 'primary.main',
				borderWidth: 2,
				cursor: 'pointer',
				'&:hover': {
					borderColor: 'primary.main',
					borderWidth: 2,
				},
			}}
		>
			<Box
				onClick={onAddGoal}
				sx={{
					mb: 4.5,
					borderRadius: '50%',
					border: '2px dashed #d1d8e0',
					bgcolor: 'rgba(93,188,117,0.4)',
					p: 3.5,
					cursor: 'pointer',
					display: 'flex',
				}}
			>
				<Bookmark style={{ width: 64, height: 64 }} />
				<Typography variant="h6" color="text.primary" fontWeight="bold">
					Add New Goal
				</Typography>
			</Box>
		</Card>
	);
};

export default AddNewGoal;
