import { Box } from '@mui/material';
import type { ReactNode } from 'react';
import Header from '@/shared/components/Header';

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<Box sx={{ height: '100vh' }}>
			<Box sx={{ flex: 1, overflow: 'auto', px: 7.5 }}>
				<Header />
				{children}
			</Box>
		</Box>
	);
}
