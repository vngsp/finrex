import { useMutation } from '@tanstack/react-query';
import { addRevenueValues, loginGoogle, loginUser, registerUser } from '@/shared/lib/api/api';
import { loginSchemaType, registerSchemaType } from '@/features/login/schemas/loginSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';

export const useLogin = (p0: { onSuccess: () => void }) => {
  return useMutation<any, Error, loginSchemaType>({
    mutationFn: loginUser,
  });
};

export const googleLogin = (p0: { onSuccess: () => void }) => {
  return useMutation<any, Error, registerSchemaType>({
    mutationFn: loginGoogle,
    onSuccess: data => {
      if (data?.token) {
        localStorage.setItem('token', data.token);
        p0.onSuccess();
      }
    },
  });
};

export const useAddRegister = (p0: { onSuccess: () => void }) => {
  return useMutation<any, Error, registerSchemaType>({
    mutationFn: registerUser,
  });
};

export const useRevenueValues = () => {
  return useMutation<any, Error, revenueSchemaType>({
    mutationFn: addRevenueValues,
  });
};
