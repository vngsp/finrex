'use client';
import ErrorAlert from '@/features/auth/components/ErrorAlert';
import ErrorHandlerInitializer from '@/features/auth/components/ErrorHandlerInitializer';
import LoginForm from '@/features/auth/components/LoginForm';
import { ErrorProvider } from '@/features/insights/contexts/AlertErrorContext';

const Page = () => {
	return (
		<ErrorProvider>
			<ErrorHandlerInitializer />
			<ErrorAlert />
			<LoginForm />
		</ErrorProvider>
	);
};

export default Page;
