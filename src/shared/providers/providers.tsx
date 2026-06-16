'use client';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';
import { theme } from '@/libs/theme';
import { ProfilePicProvider } from '@/shared/contexts/ProfilePicContext';
import { queryClient } from '@/shared/providers/queryClient';

type Props = { children: ReactNode };
export const Providers = ({ children }: Props) => {
	return (
		<ProfilePicProvider>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ProfilePicProvider>
	);
};
