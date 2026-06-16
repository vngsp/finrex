import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleLogin } from '@/api/api';
import ErrorAlert from '@/features/auth/components/ErrorAlert';
import {
	loginSchema,
	type loginSchemaType,
	registerSchema,
	type registerSchemaType,
} from '@/features/auth/schemas/loginSchema';
import { useAddRegister, useLogin } from '@/features/auth/utils/mutations';
import HaveAccount from './HaveAccount';
import LoginBtn from './LoginBtn';
import { LoginInputs } from './LoginInputs';
import LoginLoad from './LoginLoad';

type FormData = loginSchemaType | registerSchemaType;

const FormAction = () => {
	const [isRegisterMode, setIsRegisterMode] = useState(false);
	const router = useRouter();

	const schema = isRegisterMode ? registerSchema : loginSchema;

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
			router.push('/revenue');
		},
	});

	const mutation = isRegisterMode ? registerMutation : loginMutation;

	const toggleFormMode = () => {
		setIsRegisterMode((prev) => !prev);
		reset();
	};

	const handleFormSubmit = (data: FormData) => {
		mutation.mutate(data);
	};

	return (
		<Box>
			<Box
				sx={{
					width: '24rem',
					borderBottom: 1,
					borderColor: 'text.disabled',
					pb: 4,
				}}
			>
				<Typography
					variant="h5"
					fontWeight={700}
					color="text.primary"
					sx={{ fontSize: '1.875rem' }}
				>
					{!isRegisterMode ? 'Welcome Back' : 'Welcome to Finrex'}
				</Typography>
				<Typography fontWeight={700} color="primary.main" sx={{ mt: -1 }}>
					{!isRegisterMode
						? 'Glad to see you again!'
						: `Let's create your account`}
				</Typography>
			</Box>

			<Box
				component="form"
				onSubmit={handleSubmit(handleFormSubmit)}
				sx={{
					mt: 4,
					maxWidth: '24rem',
					display: 'flex',
					flexDirection: 'column',
					color: 'text.primary',
				}}
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

				<Stack alignItems="center" gap={2}>
					<LoginBtn
						hasLoggedIn={isRegisterMode}
						disabled={mutation.isPending}
					/>
					<Stack direction="row" gap={1.25}>
						{mutation.isPending && (
							<LoginLoad label={isRegisterMode ? 'Sign Up' : 'Login'} />
						)}
						<HaveAccount
							hasLoggedIn={isRegisterMode}
							toggleLogged={toggleFormMode}
						/>
						<Box
							component="span"
							sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
						>
							<FcGoogle
								size={18}
								onClick={() => {
									handleGoogleLogin();
									console.log('teste...');
								}}
							/>
						</Box>
					</Stack>
				</Stack>
			</Box>
			{mutation.isError && mutation.error && (
				<ErrorAlert message={mutation.error.message} />
			)}
		</Box>
	);
};

export default FormAction;
