import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosGitBranch } from 'react-icons/io';
import IconButton from '@/components/IconButton';
import { SlNotebook } from 'react-icons/sl';
export default function Page() {
  return (
    <>
      <div className='min-h-all flex flex-col items-center py-10'>
        <h1 className='mb-5 flex items-center gap-x-2 font-mono text-5xl font-bold text-success'>
          <SlNotebook />
          Links
        </h1>
        <h2 className='my-10 font-mono text-3xl font-bold'>SNS</h2>
        <div className='flex space-x-2'>
          <IconButton
            content='My Github Profile'
            url='https://github.com/moriyoshi-kasuga'
            icon=<FaGithub />
          />
          <IconButton
            content='My Twitter Profile'
            url='https://twitter.com/MoriyoshiKasuga'
            icon=<FaXTwitter />
          />
        </div>
        <h2 className='my-10 font-mono text-3xl font-bold'>Site</h2>
        <div className='flex space-x-2'>
          <IconButton
            content='This Portfolio'
            url='https://morilab.vercel.app/'
            icon=<IoIosGitBranch />
          />
        </div>
      </div>
    </>
  );
}
