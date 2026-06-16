import axios from 'axios';
import { handleError } from '@/api/services/errorHandler';
import type {
	loginSchemaType,
	registerSchemaType,
} from '@/features/auth/schemas/loginSchema';
import type { ProfileFormValues } from '@/features/profile/schemas/profileSchema';
import type { incomeSchemaType } from '@/features/revenue/schemas/incomeSchema';
import type { spendingSchemaType } from '@/features/revenue/schemas/spendingSchema';
import { paths } from '@/libs/paths';

const req = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL_FINREX_API,
	withCredentials: true,
});

req.interceptors.response.use(
	(response) => response,
	(error) => {
		const message =
			error.response?.data?.Message ||
			error.response?.data?.error ||
			error.message ||
			'Erro desconhecido';
		handleError(message);
		return Promise.reject(new Error(message));
	},
);

interface AuthResponse {
	token: string;
	user: {
		email: string;
		password: string;
	};
}

export const registerUser = async (
	data: registerSchemaType,
): Promise<AuthResponse> => {
	const result = await req.post<AuthResponse>(paths.api.auth.register, data);
	return result.data;
};

export const loginUser = async (
	data: loginSchemaType,
): Promise<AuthResponse> => {
	const result = await req.post<AuthResponse>(paths.api.auth.login, data);
	if (result.data.token) {
		localStorage.setItem('finrex.auth', result.data.token);
	}
	return result.data;
};

export const handleGoogleLogin = () => {
	localStorage.removeItem('finrex.auth');
	const apiUrl = `${process.env.NEXT_PUBLIC_URL_FINREX_API}/login-users/google-login`;
	window.location.href = apiUrl;
};

export const addIncomeValues = async (data: incomeSchemaType) => {
	const result = await req.post(paths.api.transaction.incomes, data);
	return result.data;
};

export const addSpendingValues = async (data: spendingSchemaType) => {
	const result = await req.post(paths.api.transaction.spendings, data);
	return result.data;
};

export const addProfileData = async (
	data: ProfileFormValues,
): Promise<ProfileFormValues> => {
	const result = await req.post(
		'https://jsonplaceholder.typicode.com/posts',
		data,
	);
	return result.data;
};
