import { useMutation } from '@tanstack/react-query';
import { ProfileFormValues } from '@/app/(realApp)/profile/schemas/profileSchema';
import { addProfileData } from '@/shared/lib/api/api';

export const useProfileData = () => {
  return useMutation<any, Error, ProfileFormValues>({
    mutationKey: ['addProfileData'],
    mutationFn: addProfileData,
  });
};
