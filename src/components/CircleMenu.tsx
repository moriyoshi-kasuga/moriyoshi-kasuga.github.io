'use client';
import { cn } from '@/lib/utils';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import './CircleMenu.css';
import { useState } from 'react';
import { MenuButton } from './MenuButton';

type OverlayPlacement =
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

type CircleLink = {
  href: string;
  content: React.ReactNode;
  icon: React.ReactNode;
  placement?: OverlayPlacement;
  tooltipColor:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'foreground'
    | undefined;
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
          'relative h-full w-full items-center justify-center bg-sky-400 p-5 duration-400 hover:bg-amber-400',
          close && 'close bg-amber-400 hover:bg-sky-400',
        )}
      />
      <nav className='relative left-[140%] h-[60px] w-[60px]'>
        {links.map((link, index) => {
          return (
            <Tooltip
              key={link.href}
              placement={link.placement ?? 'left-start'}
              content={link.content}
              color={link.tooltipColor ?? 'default'}
              delay={0}
              closeDelay={0}
            >
              <Link
                href={link.href}
                className={cn('circle-link', link.linkClass)}
                style={{
                  ['--index' as string]: index,
                }}
              >
                {link.icon}
              </Link>
            </Tooltip>
          );
        })}
      </nav>
    </div>
  );
};

export default Menu;
