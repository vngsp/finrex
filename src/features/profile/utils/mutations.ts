import { useMutation } from '@tanstack/react-query';
import { addProfileData } from '@/api/api';
import type { ProfileFormValues } from '@/features/profile/schemas/profileSchema';

export const useProfileData = () => {
	return useMutation<ProfileFormValues, Error, ProfileFormValues>({
		mutationKey: ['addProfileData'],
		mutationFn: addProfileData,
	});
};
