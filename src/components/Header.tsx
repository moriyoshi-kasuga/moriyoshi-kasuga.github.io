import { FaHome, FaProjectDiagram, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { FaComputer } from 'react-icons/fa6';
import { MobileMenu } from './MobileMenu';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex h-[var(--header-height)] w-screen items-center py-2  before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:backdrop-blur-sm'>
      <nav className='container relative mx-auto flex items-center justify-between'>
        <Link
          href='/'
          className='absolute aspect-square h-[calc(var(--header-height)*0.8)] transition-transform hover:scale-110 max-md:left-[50%]'
        >
          <Image
            src={'/mori.png'}
            alt='My Avatar'
            className='rounded-full object-cover ring-2 ring-default ring-offset-2 ring-offset-foreground'
            fill
            sizes='(100%,100%)'
          />
        </Link>

        <div className='ml-auto hidden items-center space-x-6 font-mono text-xl md:flex'>
          <Link href='/' className='link-hover-animation'>
            <FaHome className='mr-1' />
            <span>Home</span>
          </Link>
          <Link href='/about' className='link-hover-animation'>
            <FaSearch className='mr-1' />
            <span>About</span>
          </Link>
          <Link href='/projects' className='link-hover-animation'>
            <FaProjectDiagram className='mr-1' />
            <span>Projects</span>
          </Link>
          <Link href='/skills' className='link-hover-animation'>
            <FaComputer className='mr-1' />
            <span>Skills</span>
          </Link>
        </div>
        <div className='ml-auto flex items-center md:hidden'>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
