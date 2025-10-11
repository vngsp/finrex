import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import { loginSchemaType, registerSchemaType } from '@/features/login/schemas/loginSchema';
import { addRevenueValues, loginUser, registerUser } from '@/shared/lib/api/api';
import { useMutation } from '@tanstack/react-query';

export const useLogin = (options: { onSuccess: () => void }) => {
  return useMutation<any, Error, loginSchemaType>({
    mutationFn: loginUser,
    ...options,
  });
};

export const useAddRegister = (options: { onSuccess: () => void }) => {
  return useMutation<any, Error, registerSchemaType>({
    mutationFn: registerUser,
    ...options,
  });
};

export const useRevenueValues = () => {
  return useMutation<any, Error, revenueSchemaType>({
    mutationFn: addRevenueValues,
  });
};
