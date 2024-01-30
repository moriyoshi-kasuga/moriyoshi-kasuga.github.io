'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import './CircleMenu.css';
import { useState } from 'react';
import { MenuButton } from './MenuButton';

type CircleLink = {
  href: string;
  icon: React.ReactNode;
  content: string;
  linkClass?: string;
};

const Menu = ({
  links,
  range,
  startAngle,
}: {
  links: CircleLink[];
  range?: number;
  startAngle?: number;
}) => {
  const [close, setClose] = useState(false);

  return (
    <div
      className={cn('fixed bottom-5 right-5 z-40 h-20 w-20', close && 'close')}
      style={{
        ['--numberOfElement' as string]: links.length,
        ['--range' as string]: `${range || 90}deg`,
        ['--startAngle' as string]: `${startAngle || 187}deg`,
      }}
      id='menu'
    >
      <MenuButton
        id='menu-button'
        isOpen={!close}
        onClick={() => setClose(!close)}
        className={cn(
          'duration-400 relative h-full w-full items-center justify-center bg-sky-400 p-5',
          close && 'close bg-amber-400',
        )}
      />
      <nav className='relative left-[140%] h-[60px] w-[60px]'>
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={cn('circle-link', link.linkClass)}
              style={{
                ['--index' as string]: index,
              }}
            >
              {link.icon}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Menu;
