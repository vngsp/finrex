'use client';

import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Goals from '@/features/revenue/components/icons/Goals.svg';
import Insights from '@/features/revenue/components/icons/Insights.svg';
import Profit from '@/features/revenue/components/icons/Profit.svg';
import RevenueSpending from '@/features/revenue/components/icons/RevenueSpending.svg';
import { paths } from '@/libs/paths';
import { useProfilePic } from '@/shared/contexts/ProfilePicContext';

const navLinks = [
	{ path: paths.page.insights, label: 'Insights', Icon: Insights },
	{
		path: paths.page.revenue,
		label: 'Revenue & Spending',
		Icon: RevenueSpending,
	},
	{ path: paths.page.goals, label: 'Goals', Icon: Goals },
	{ path: paths.page.profit, label: 'Profit', Icon: Profit },
];

const Header = () => {
	const { fileUrl } = useProfilePic();
	const picSource = fileUrl || '/user.png';
	const pathName = usePathname();

	return (
		<Box component="header" sx={{ mb: 4.5, bgcolor: 'background.default' }}>
			<nav>
				<Stack
					component="ul"
					direction="row"
					alignItems="center"
					sx={{
						mx: 'auto',
						width: 'fit-content',
						gap: 16,
						borderBottom: 1,
						borderColor: 'primary.main',
						py: 4,
						pl: 0,
						listStyle: 'none',
						cursor: 'pointer',
					}}
				>
					<Box component="li">
						<Image src={'/darkLogo.png'} alt={'logo'} width={180} height={46} />
					</Box>
					{navLinks.map(({ path, label, Icon }) => {
						const isActive = pathName.startsWith(path);
						return (
							<Box
								key={path}
								component="li"
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									fontSize: '1.25rem',
									textWrap: 'nowrap',
									color: isActive ? 'text.primary' : 'text.disabled',
									'&:hover': { color: 'text.primary' },
								}}
							>
								<Icon style={{ height: 40, width: 40 }} />
								<Link
									href={path}
									style={{ color: 'inherit', textDecoration: 'none' }}
								>
									{label}
								</Link>
							</Box>
						);
					})}
					<Box component="li">
						<Link href={'/profile'}>
							<Image
								unoptimized
								src={picSource}
								alt="Your Profile Picture"
								width={52}
								height={52}
								style={{ borderRadius: '50%', objectFit: 'cover' }}
							/>
						</Link>
					</Box>
				</Stack>
			</nav>
		</Box>
	);
};

export default Header;
