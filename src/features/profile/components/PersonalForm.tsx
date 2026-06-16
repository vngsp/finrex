'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import ProfilePic from '@/features/profile/components/ProfilePic';
import UsageTimeIcon from '@/features/profile/components/UsageTimeIcon';
import UserDatas from '@/features/profile/components/UserDatas';
import {
	type ProfileFormValues,
	profileSchema,
} from '@/features/profile/schemas/profileSchema';
import { useProfileData } from '@/features/profile/utils/mutations';
import PersonalFormInput from './PersonalFormInput';

const PersonalForm = () => {
	const { handleSubmit, control } = useForm<ProfileFormValues>({
		resolver: zodResolver(profileSchema),
	});

	const profileMutation = useProfileData();

	const handleFormSubmit = (data: ProfileFormValues) => {
		profileMutation.mutateAsync(data);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				width: '66%',
				flexDirection: 'column',
				justifyContent: 'center',
				borderRadius: 1,
				border: '1px solid',
				borderColor: 'primary.main',
				px: 3,
				py: 1,
			}}
		>
			<UsageTimeIcon monthsUsed={6} positionY={45} positionX={210} />
			<Stack direction={'row'} gap={2} pt={2.5}>
				<ProfilePic />
				<UserDatas />
			</Stack>
			<Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
				<Box sx={{ mb: 1.5, display: 'flex', flexDirection: 'column' }}>
					<PersonalFormInput
						control={control}
						name="username"
						placeholder="Name"
					/>
					<PersonalFormInput
						control={control}
						name="age"
						placeholder="Age"
						isNumeric
					/>
					<PersonalFormInput
						control={control}
						name="business"
						placeholder="Business"
					/>
					<PersonalFormInput
						control={control}
						name="salary"
						placeholder="Salary"
						isNumeric
					/>
					<PersonalFormInput
						control={control}
						name="jobTitle"
						placeholder="Job Title"
					/>
					<PersonalFormInput
						control={control}
						name="financesGoal"
						placeholder="Finances Goal"
					/>
				</Box>
				<Button
					type="submit"
					variant="contained"
					sx={{
						ml: 7.5,
						bgcolor: 'primary.main',
						'&:hover': { bgcolor: 'primary.dark' },
					}}
				>
					Save Profile
				</Button>
			</Box>
		</Box>
	);
};
export default PersonalForm;
