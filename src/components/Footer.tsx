'use client';
import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className='relative w-full bg-default-900 py-2 text-default-50'>
      <div className='absolute left-0 top-[-70%] z-10 h-[40px] w-full'>
        <div
          className='realtive mx-auto h-[40px] w-[80px] rounded-t-full bg-default-900 transition-all hover:translate-y-[-20%]'
          onClick={() => scrollTop()}
        >
          <IoIosArrowUp className='mx-auto text-5xl' />
        </div>
      </div>
      <div className='container mx-auto'>
        <span className='text-center'>Copyright © 2024 Mo-ri-</span>
      </div>
    </footer>
  );
};

export default Footer;
