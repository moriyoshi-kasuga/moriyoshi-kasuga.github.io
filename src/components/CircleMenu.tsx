'use client';
import { cn } from '@/lib/utils';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import './CircleMenu.css';
import { useState } from 'react';

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
  const [animate, setAnimate] = useState(false);

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
      <button
        id='menu-button'
        onClick={() => setClose(!close)}
        onAnimationStart={() => setAnimate(true)}
        onAnimationEnd={() => setAnimate(false)}
        className={cn(
          'relative mb-5 flex h-20 w-20 flex-col items-center justify-center bg-sky-400 duration-400 [&.hovered]:bg-amber-400',
          close && 'close bg-amber-400 [&.hovered]:bg-sky-400',
        )}
      >
        <svg className='select-none fill-zinc-600' viewBox='0 0 100 100' width='250'>
          <rect className='line top' width='60' height='10' x='20' y='25' rx='5'></rect>
          <rect
            className='line middle'
            width='60'
            height='10'
            x='20'
            y='45'
            rx='5'
          ></rect>
          <rect
            className='line bottom'
            width='60'
            height='10'
            x='20'
            y='65'
            rx='5'
          ></rect>
        </svg>
      </button>
      <nav className='relative left-[140%] h-[60px] w-[60px]'>
        {links.map((link, index) => {
          return (
            <Tooltip
              key={link.href}
              placement={link.placement ?? 'left-start'}
              content={link.content}
              color={link.tooltipColor ?? 'default'}
              isOpen={animate ? false : undefined}
              delay={0}
              closeDelay={100}
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
