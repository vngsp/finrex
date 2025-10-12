'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Goals from '../(realApp)/revenue/components/icons/Goals.svg';
import Insights from '../(realApp)/revenue/components/icons/Insights.svg';
import Profit from '../(realApp)/revenue/components/icons/Profit.svg';
import RevenueSpending from '../(realApp)/revenue/components/icons/RevenueSpending.svg';

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: '/insights',
      label: 'Insights',
      Icon: Insights,
    },
    {
      href: '/revenue',
      label: 'Revenue & Spending',
      Icon: RevenueSpending,
    },
    {
      href: '/goals',
      label: 'Goals',
      Icon: Goals,
    },
    {
      href: '/profit',
      label: 'Profit',
      Icon: Profit,
    },
  ];
  return (
    <header className='mb-9 bg-white'>
      <div>
        <nav>
          <ul className='m-auto flex w-fit cursor-pointer items-center gap-32 border-b border-[var(--green-theme)] py-8'>
            <li>
              <img src={'/darkLogo.png'} alt='logo' className='w-45' />
            </li>
            {navLinks.map(({ href, label, Icon }) => {
              const isActive = pathname === href;

              return (
                <li
                  key={href}
                  className={`flex items-center gap-2 text-xl text-nowrap hover:text-[var(--text-color)] ${
                    isActive ? 'text-[var(--text-color)]' : 'text-[var(--desactive-color)]'
                  }`}
                >
                  <Icon className={'h-10 w-10 fill-current'} />
                  <Link href={href}>{label}</Link>
                </li>
              );
            })}
            <li className={'rounded-full'}>
              <img src='/user.png' alt='' className={'h-13 w-13'} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
