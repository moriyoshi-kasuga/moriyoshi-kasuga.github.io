import { Item, List } from '@/components/List';
import { AiFillLike } from 'react-icons/ai';
export default function Page() {
  return (
    <>
      <div className='min-h-all flex flex-col items-center py-10'>
        <h1 className='mb-10 flex animate-bounce items-center gap-x-2 font-mono text-5xl font-bold text-danger underline decoration-danger decoration-dashed underline-offset-8'>
          <AiFillLike />
          Likes
        </h1>
        <List>
          <Item id='エディター' href='https://github.com/neovim/neovim' value='Neovim' />
          <Item
            id='エディターテーマ'
            href='https://github.com/craftzdog/solarized-osaka.nvim'
            value='solarized-osaka'
          />
        </List>
      </div>
    </>
  );
}
