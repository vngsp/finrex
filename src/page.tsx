'use client';
import ErrorHandlerInitializer from '@/features/auth/components/ErrorHandlerInitializer';
import LoginForm from '@/features/auth/components/LoginForm';
import { ErrorProvider } from '@/features/insights/contexts/AlertErrorContext';

const Page = () => {
	return (
		<ErrorProvider>
			<ErrorHandlerInitializer />
			<LoginForm />
		</ErrorProvider>
	);
};

export default Page;
