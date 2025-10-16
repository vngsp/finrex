'use client';

import { loginGoogle } from '@/shared/lib/api/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { loginSchema, loginSchemaType, registerSchema, registerSchemaType } from '../schemas/loginSchema';
import { useAddRegister, useLogin } from '../utils/mutations';
import ErrorAlert from './ErrorAlert';
import HaveAccount from './HaveAccount';
import LoginBtn from './LoginBtn';
import { LoginInputs } from './LoginInputs';
import LoginLoad from './LoginLoad';

type FormData = loginSchemaType | registerSchemaType;

const FormAction = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const router = useRouter();

  const schema = isRegisterMode ? registerSchema : loginSchema;

  useEffect(() => {
    router.refresh();
  }, [router]);

  const { control, handleSubmit, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const registerMutation = useAddRegister({
    onSuccess: () => {
      setIsRegisterMode(false);
      reset();
    },
  });
  const loginMutation = useLogin({
    onSuccess: () => {
      router.push('/insights');
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
        className={'mt-6 flex max-w-sm flex-col text-[var(--text-color)]'}
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
          <div className='flex items-center gap-2'>
            <HaveAccount hasLoggedIn={isRegisterMode} toggleLogged={toggleFormMode} />
            <button className='cursor-pointer'>
              <FcGoogle
                title='Login com o Google...'
                aria-label='Login com o Google...'
                size={18}
                onClick={() => {
                  loginGoogle();
                }}
              />
            </button>
          </div>
        </div>
      </form>
      {mutation.isError && mutation.error && <ErrorAlert message={mutation.error.message} />}
    </div>
  );
};

export default FormAction;
