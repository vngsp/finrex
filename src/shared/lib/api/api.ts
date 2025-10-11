import { ProfileFormValues } from '@/app/(realApp)/profile/schemas/profileSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import { loginSchemaType, registerSchemaType } from '@/features/login/schemas/loginSchema';
import axios from 'axios';
import { handleError } from './services/errorHandler';

const req = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_URL_FINREX_API,
  baseURL: 'http://localhost:5023/api/v1',
  withCredentials: true,
});

req.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

req.interceptors.response.use(
  response => response,
  error => {
    // Handle error responses
    const message =
      error.response?.data?.Message || error.response?.data?.error || error.message || 'Erro desconhecido';
    handleError(message);
    return Promise.reject(new Error(message));
  }
);

interface AuthResponse {
  token: string;
  user: {
    email: string;
    password: string;
  };
}

export const registerUser = async (data: registerSchemaType): Promise<AuthResponse> => {
  const result = await req.post<AuthResponse>('/LoginUsers/register', data);
  return result.data;
};

export const loginUser = async (data: loginSchemaType): Promise<AuthResponse> => {
  const result = await req.post<AuthResponse>('/LoginUsers/login', data);

  if (result.data.token) {
    localStorage.setItem('token', result.data.token);
  }
  return result.data;
};

export const loginGoogle = () => {
  const redirectUri = 'http://localhost:3000';
  window.location.href = `http://localhost:5023/api/v1/LoginUsers/google-login?redirect_uri=${encodeURIComponent(redirectUri)}`;

  if (redirectUri) {
    window.location.href = '/revenue';
  }
};

export const logoutGoogle = async () => {
  const result = await fetch('/LoginUsers/logout');
  if (!result) {
    console.log('Falha ao fazer logout');
  }
  if (result.ok) {
    console.log('Logout realizado com sucesso');
    window.location.href = '/login';
  }

  return result;
};

export const addRevenueValues = async (data: revenueSchemaType): Promise<revenueSchemaType> => {
  const result = await req.post('/revenue', data);
  return result.data;
};

export const addProfileData = async (data: ProfileFormValues): Promise<ProfileFormValues> => {
  const result = await req.post('https://jsonplaceholder.typicode.com/posts', data);
  return result.data;
};
