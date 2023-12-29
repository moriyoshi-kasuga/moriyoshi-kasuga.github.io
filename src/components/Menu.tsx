/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { SlNotebook } from 'react-icons/sl';
import { FaComputer } from 'react-icons/fa6';
import { TbReportSearch } from 'react-icons/tb';
import { FaShoppingBag } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { cn } from '@/utils/util';

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
          'mb-5 flex h-20 w-20 flex-col items-center justify-center bg-primary-200 duration-400 hover:bg-secondary-200',
          close && 'close bg-secondary-200 hover:bg-primary-200',
          (!(close && hover) && (close || hover)) ? 'change' : null
        )}
      >
        <svg className='text-black'viewBox='0 0 100 100' width='250'>
          <rect className='line top' width='80' height='10' x='10' y='25' rx='5'></rect>
          <rect
            className='line middle'
            width='80'
            height='10'
            x='10'
            y='45'
            rx='5'
          ></rect>
          <rect
            className='line bottom'
            width='80'
            height='10'
            x='10'
            y='65'
            rx='5'
          ></rect>
        </svg>
      </button>
      <nav className='relative left-[140%] h-[60px] w-[60px]'>
        <a
          href='#'
          className='circle-link bg-yellow-400'
          style={{
            ['--index' as any]: 0,
          }}
        >
          <FaHome className='text-xl' />
        </a>
        <a
          href='#'
          className='circle-link bg-yellow-400'
          style={{
            ['--index' as any]: 1,
          }}
        >
          <FaShoppingBag className='text-xl' />
        </a>
        <a
          href='#'
          className='circle-link bg-yellow-400'
          style={{
            ['--index' as any]: 2,
          }}
        >
          <TbReportSearch className='text-xl' />
        </a>
        <a
          href='#'
          className='circle-link bg-yellow-400'
          style={{
            ['--index' as any]: 3,
          }}
        >
          <FaComputer className='text-xl' />
        </a>
        <a
          href='#'
          className='circle-link bg-yellow-400'
          style={{
            ['--index' as any]: 4,
          }}
        >
          <SlNotebook className='text-xl' />
        </a>
      </nav>
    </div>
  );
};

export default Menu;
