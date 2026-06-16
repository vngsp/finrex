import { useMutation } from '@tanstack/react-query';
import {
	addIncomeValues,
	addSpendingValues,
	loginUser,
	registerUser,
} from '@/api/api';

export const useAddRegister = ({ onSuccess }: { onSuccess: () => void }) => {
	return useMutation({
		mutationFn: registerUser,
		onSuccess,
	});
};

export const useLogin = ({ onSuccess }: { onSuccess: () => void }) => {
	return useMutation({
		mutationFn: loginUser,
		onSuccess,
	});
};

export const useIncomeValues = () => {
	return useMutation({
		mutationKey: ['income'],
		mutationFn: addIncomeValues,
	});
};

export const useSpendingValues = () => {
	return useMutation({
		mutationKey: ['spending'],
		mutationFn: addSpendingValues,
	});
};
