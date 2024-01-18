import { SlNotebook } from 'react-icons/sl';
import { FaComputer } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { List, Item } from '@/components/List';
import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
  return (
    <>
      <div className='min-h-all flex flex-col items-center py-10'>
        <h1 className='flex items-center gap-x-2 font-mono text-5xl font-bold text-warning-300'>
          <FaSearch />
          About me
        </h1>
        <div className='mb-7 mt-14 flex gap-8 max-md:flex-col'>
          <Link href='/about/likes' className='btn bg-danger-300 hover:text-danger-300'>
            <AiOutlineLike />
            Likes
          </Link>
          <Link href='/about/links' className='btn bg-success-300 hover:text-success-300'>
            <SlNotebook />
            Links
          </Link>
          <Link href='/skills' className='btn bg-primary-300 hover:text-primary-300'>
            <FaComputer />
            Skills
          </Link>
        </div>
        <List>
          <Item id='名前' value='Mori' />
          <Item id='年齢' value='16' />
          <Item id='誕生日' value='2007/12/18' />
          <Item id='言語' value='Python・JavaScript・TypeScript・Java' />
          <Item id='ツール' value='WSL2,macOs,Neovim' />
        </List>
        <div className='container mt-8 grid h-[600px] grid-cols-1 items-center justify-center md:h-[400px] md:grid-cols-2 lg:h-[200px] lg:grid-cols-3'>
          <div className='relative h-[200px]'>
            <Image
              alt='Top Langs'
              fill
              sizes='(100%,100%)'
              src='https://github-readme-stats.vercel.app/api?username=moriyoshi-kasuga&theme=onedark&show_icons=true'
            />
          </div>
          <div className='relative order-none h-[200px] max-lg:col-span-2 md:order-1 lg:order-none'>
            <Image
              alt='Top Langs'
              fill
              sizes='(100%,100%)'
              src='https://github-readme-stats.vercel.app/api/top-langs/?username=moriyoshi-kasuga&layout=compact&show_icons=true&theme=onedark'
            />
          </div>
          <div className='relative h-[200px]'>
            <Image
              alt='github stats'
              fill
              sizes='(100%,100%)'
              src='https://github-readme-streak-stats.herokuapp.com?user=moriyoshi-kasuga&theme=onedark'
            />
          </div>
        </div>
      </div>
    </>
  );
}
