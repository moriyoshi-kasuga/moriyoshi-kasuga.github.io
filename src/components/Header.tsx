'use client';
import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaProjectDiagram,
  FaRegCommentAlt,
  FaSearch,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FaComputer } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import './Header.css';

export default function Header() {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 flex h-[var(--header-height)] w-screen items-center py-2 transition-colors-opacity',
        isTop || 'backdrop-blur-md',
      )}
    >
      <nav className='container relative mx-auto flex items-center justify-between'>
        <Link
          href='/'
          className='absolute left-[50%] aspect-square h-full scale-125 transition-transform hover:scale-150 md:left-[unset]'
        >
          <Image
            src={'/mori.png'}
            alt='My Avatar'
            className='rounded-full object-cover'
            fill
            sizes='(100%,100%)'
          />
        </Link>

        <div className='ml-auto hidden items-center space-x-6 font-mono text-xl md:flex'>
          <Link href='/' className='linkHover'>
            <FaHome className='mr-1' />
            <span>Home</span>
          </Link>
          <Link href='/about' className='linkHover'>
            <FaSearch className='mr-1' />
            <span>About</span>
          </Link>
          <Link href='/projects' className='linkHover'>
            <FaProjectDiagram className='mr-1' />
            <span>Projects</span>
          </Link>
          <Link href='/skills' className='linkHover'>
            <FaComputer className='mr-1' />
            <span>Skills</span>
          </Link>
        </div>
        <div className='ml-auto flex items-center md:hidden'>
          <FaRegCommentAlt size={32} />
        </div>
      </nav>
    </header>
  );
}
