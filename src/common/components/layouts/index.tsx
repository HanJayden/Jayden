import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

import HeaderTop from './header/HeaderTop';
import useHasMounted from '@/common/hooks/useHasMounted';











interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');
  return (
    <>
      <div
        className={clsx(
          'max-w-6xl mx-auto lg:px-8',
          isDarkTheme ? 'dark:text-darkText' : ''
        )}
      >
        <div className='flex flex-col xl:pb-8'>
          <HeaderTop />
          <main className='transition-all duration-300'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
