import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import {
  MdVerified as VerifiedIcon,
} from 'react-icons/md';

import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Image from '../../elements/Image';
import ThemeToggleButton from '../../elements/ThemeToggleButton';
import Tooltip from '../../elements/Tooltip';
import { MENU_ITEMS } from '@/common/constant/menu';

const HeaderTop = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const router = useRouter();

  const menus = MENU_ITEMS.filter(
    (item) => item.isShow && item.title !== 'Home'
  );

  return (
    <header>
      <div className='flex gap-5 items-center justify-between py-8 mx-8'>
        <div className='flex items-center gap-5'>
          <Image
            src='/images/jayden.jpg'
            alt='Jayden Han'
            width={40}
            height={40}
            rounded='rounded-full'
            className='lg:hover:scale-105'
          />
          <div className='hidden sm:flex items-center gap-3'>
            <Link href='/' passHref>
              <h2 className='flex-grow text-lg lg:text-xl font-sora font-medium'>
                Jayden Han
              </h2>
            </Link>
            <Tooltip title='Verified'>
              <VerifiedIcon
                size={18}
                className='text-blue-400'
                data-aos='flip-right'
              />
            </Tooltip>
          </div>
        </div>
        <div className='flex gap-6 items-center' data-aos='flip-up'>
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              passHref
              className={clsx(
                'text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100',
                router.pathname === menu?.href &&
                  '!text-neutral-800 dark:!text-neutral-100'
              )}
            >
              <div>{menu.title}</div>
            </Link>
          ))}
        </div>
        <div className='flex justify-between items-center gap-5'>
          <ThemeToggleButton />
          <CommandIcon
            onClick={() => setIsOpen(true)}
            className='cursor-pointer'
            size={20}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
