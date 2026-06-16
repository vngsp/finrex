import { Box, InputBase, Typography } from '@mui/material';
import { useState } from 'react';

const UserDatas = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [username, setUsername] = useState('username');

	const handleBlur = () => {
		setIsEditing(false);
	};

	return (
		<Box>
			{isEditing ? (
				<InputBase
					autoFocus
					value={username}
					inputProps={{ maxLength: 12 }}
					onChange={(e) => setUsername(e.target.value)}
					onBlur={handleBlur}
					sx={{
						maxWidth: 128,
						fontSize: '1.25rem',
						fontWeight: 700,
						color: 'text.primary',
					}}
				/>
			) : (
				<Typography
					variant="h6"
					fontWeight={700}
					color="text.primary"
					onClick={() => setIsEditing(true)}
					sx={{ cursor: 'pointer' }}
				>
					{username}
				</Typography>
			)}
			<Typography variant="body2" color="text.disabled">
				Elijah@gmail.com
			</Typography>
		</Box>
	);
};

export default UserDatas;
