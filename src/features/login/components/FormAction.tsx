'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, loginSchemaType, registerSchema, registerSchemaType } from '../schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginInputs } from './LoginInputs';
import LoginBtn from './LoginBtn';
import HaveAccount from './HaveAccount';
import LoginLoad from './LoginLoad';
import { useAddRegister, useLogin } from '../utils/mutations';
import ErrorAlert from './ErrorAlert';
import { loginGoogle, logoutGoogle } from '@/shared/lib/api/api';
import { useRouter, useSearchParams } from 'next/navigation';

type FormData = loginSchemaType | registerSchemaType;

const FormAction = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const schema = isRegisterMode ? registerSchema : loginSchema;

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      localStorage.setItem('token', token as string);

      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);

      router.push('/revenue');
    }
  }, [router, searchParams]);

  const registerMutation = useAddRegister({
    onSuccess: () => {
      setIsRegisterMode(false);
      reset();
    },
  });
  const loginMutation = useLogin({
    onSuccess: () => {
      router.push('/revenue');
    },
  });

  const mutation = isRegisterMode ? registerMutation : loginMutation;

  const toggleFormMode = () => {
    setIsRegisterMode(prev => !prev);
    reset();
  };

  const handleFormSubmit = (data: FormData) => {
    mutation.mutate(data as any);
  };

  return (
    <div>
      <div className={'w-sm border-b-1 border-[var(--lines-color)] pb-4'}>
        <h2 className={'text-3xl font-bold text-[var(--text-color)]'}>
          {!isRegisterMode ? 'Welcome Back' : 'Welcome to Finrex'}
        </h2>
        <h4 className={'-mt-2 font-bold text-[var(--green-theme)]'}>
          {!isRegisterMode ? 'Glad to see you again!' : `Let's create your account`}
        </h4>
      </div>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={'mt-8 flex max-w-sm flex-col text-[var(--text-color)]'}
      >
        <LoginInputs
          name={'email'}
          control={control}
          label={'E-mail'}
          placeholder={'your@email.com'}
          inputType={'text'}
        />
        <LoginInputs
          name={'password'}
          control={control}
          label={'Password'}
          placeholder={'Your password'}
          inputType={'password'}
        />

        <div className={'flex flex-col items-center gap-4'}>
          <LoginBtn hasLoggedIn={isRegisterMode} disabled={mutation.isPending} />

          {mutation.isPending && <LoginLoad label={isRegisterMode ? 'Sign Up' : 'Login'} />}
          <HaveAccount hasLoggedIn={isRegisterMode} toggleLogged={toggleFormMode} />
        </div>
      </form>
      {mutation.isError && mutation.error && <ErrorAlert message={mutation.error.message} />}

      <button
        onClick={() => {
          console.log('Redirect for google login...');
          loginGoogle();
        }}
        className={'m-2 cursor-pointer bg-red-500'}
      >
        Login with Google
      </button>

      <button
        onClick={() => {
          console.log('logout...');
          logoutGoogle();
        }}
        className={'cursor-pointer bg-blue-500'}
      >
        Logout
      </button>
    </div>
  );
};

export default FormAction;
