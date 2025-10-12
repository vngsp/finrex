import { ReactNode } from 'react';
import Header from '@/shared/components/Header';

export default function RealAppLayout({ children }: { children: ReactNode }) {
  return (
    <div className='h-screen'>
      <div className='flex-1 overflow-auto px-15'>
        <Header />
        {children}
      </div>
    </div>
  );
}
