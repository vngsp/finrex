import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { Providers } from '@/shared/providers/providers';

const nunito = Nunito({
	variable: '--font-nunito',
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Finrex',
	description: 'Organize and track your finances',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
