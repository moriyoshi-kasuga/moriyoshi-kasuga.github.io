/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { SlNotebook } from 'react-icons/sl';
import { FaComputer } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { FaBusinessTime } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { cn } from '@/utils/util';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const Menu = () => {
  const [close, setClose] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={cn('fixed bottom-5 right-5 z-40 h-20 w-20', close && 'close')}
      id='menu'
    >
      <button
        id='menu-button'
        onClick={() => setClose(!close)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onAnimationStart={() => setHover(false)}
        className={cn(
          'mb-5 flex h-20 w-20 flex-col items-center justify-center bg-sky-400 duration-400 [&.hovered]:bg-amber-400',
          close && 'close bg-amber-400 [&.hovered]:bg-sky-400',
          hover && 'hovered',
          !(close && hover) && (close || hover) ? 'change' : null,
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
        <Tooltip placement='left-start' content='Home' color='success'>
          <Link
            href='/'
            className='circle-link bg-success-400'
            style={{
              ['--index' as any]: 0,
            }}
          >
            <FaHome className='text-xl' />
          </Link>
        </Tooltip>
        <Tooltip placement='left-start' content='My skill' color='primary'>
          <Link
            href='/skill'
            className='circle-link bg-primary-400'
            style={{
              ['--index' as any]: 1,
            }}
          >
            <FaBusinessTime className='text-xl' />
          </Link>
        </Tooltip>
        <Tooltip placement='left-start' content='About me' color='warning'>
          <Link
            href='/about'
            className='circle-link bg-warning-400'
            style={{
              ['--index' as any]: 2,
            }}
          >
            <TbReportSearch className='text-xl' />
          </Link>
        </Tooltip>
        <Tooltip placement='top-end' content='My work' color='danger'>
          <Link
            href='/work'
            className='circle-link bg-danger-400'
            style={{
              ['--index' as any]: 3,
            }}
          >
            <FaComputer className='text-xl' />
          </Link>
        </Tooltip>
        <Tooltip placement='top-end' content='My note' color='secondary'>
          <Link
            href='/note'
            className='circle-link bg-secondary-400'
            style={{
              ['--index' as any]: 4,
            }}
          >
            <SlNotebook className='text-xl' />
          </Link>
        </Tooltip>
      </nav>
    </div>
  );
};

export default Menu;
