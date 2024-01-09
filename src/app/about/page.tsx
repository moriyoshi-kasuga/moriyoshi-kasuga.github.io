import { SlNotebook } from 'react-icons/sl';
import { FaComputer } from 'react-icons/fa6';
import { AiOutlineLike } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { List, Item } from '@/components/List';
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <div className='min-h-all flex flex-col items-center py-10'>
        <h1 className='flex animate-bounce items-center gap-x-2 font-mono text-5xl font-bold text-warning underline decoration-warning decoration-dashed underline-offset-8'>
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
        {/* <div className='mt-10 flex w-full flex-col items-center font-mono-jp text-2xl container break-words'> */}
        {/*   高校生のただのプログラマーです、まだ普通の学生なのでプログラミングをしています。 */}
        {/*   最近はPythonのframeworkのDjango,Flaskを学んだり、このポートフォリオではNext.jsというReactのframeworkを使用しています。 */}
        {/*   一番驚いたことは、Reactはframeworkではなくlibraryということです。 */}
        {/* </div> */}
      </div>
    </>
  );
}
