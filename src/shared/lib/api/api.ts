import { ProfileFormValues } from '@/app/(realApp)/profile/schemas/profileSchema';
import { revenueSchemaType } from '@/app/(realApp)/revenue/schemas/revenueSchema';
import { loginSchemaType, registerSchemaType } from '@/features/login/schemas/loginSchema';
import { handleError } from './services/errorHandler';
import axios from 'axios';
import Cookies from 'js-cookie';

const req = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_URL_FINREX_API,
  baseURL: 'http://localhost:5023/api/v1',
  withCredentials: true,
});

req.interceptors.request.use(config => {
  const token = Cookies.get('finrex.auth');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

req.interceptors.response.use(
  response => {
    return response;
  },
  error => {
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
  try {
    const result = await req.post<AuthResponse>('/LoginUsers/login', data);

    if (result.data.token) {
      Cookies.set('finrex.auth', result.data.token, {
        expires: 7,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      });
    }
    return result.data;
  } catch (error) {
    console.error('loginUser: ERRO CAPTURADO no try/catch', error);
    throw error;
  }
};

export const loginGoogle = () => {
  const redirectUri = 'http://localhost:3000/insights';
  window.location.href = `http://localhost:5023/api/v1/LoginUsers/google-login?redirect_uri=${encodeURIComponent(redirectUri)}`;
};

export const addRevenueValues = async (data: revenueSchemaType): Promise<revenueSchemaType> => {
  const result = await req.post('/revenue', data);
  return result.data;
};

export const addProfileData = async (data: ProfileFormValues): Promise<ProfileFormValues> => {
  const result = await req.post('https://jsonplaceholder.typicode.com/posts', data);
  return result.data;
};
