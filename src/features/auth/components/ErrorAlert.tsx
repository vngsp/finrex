import { Alert, Box } from '@mui/material';
import { useEffect } from 'react';
import { useAlertError } from '@/features/insights/contexts/AlertErrorContext';

const ErrorAlert = ({ message }: { message?: string }) => {
	const { error, setError } = useAlertError();

	useEffect(() => {
		if (!error) return;
		const timer = setTimeout(() => {
			setError(undefined);
		}, 3000);
		return () => clearTimeout(timer);
	}, [error, setError]);

	if (!message) return null;

	return (
		<Box sx={{ position: 'absolute', top: 400, left: 640, zIndex: 40 }}>
			<Alert
				severity={'error'}
				variant={'filled'}
				sx={{ whiteSpace: 'nowrap' }}
			>
				{message}
			</Alert>
		</Box>
	);
};

export default ErrorAlert;
