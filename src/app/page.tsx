import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosGitBranch } from 'react-icons/io';
import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

const showProjects = ['dotfiles', 'ryama-v1', 'portfolio-v1'];

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center bg-primary-300 py-10 text-default-50'>
      <div className='min-h-content flex flex-col items-center'>
        <h1 className='font-mono-jp text-7xl font-semibold'>MoriLab</h1>
        <h2 className='font-mono text-3xl'>Mori Programmer Lab</h2>
        <div className='mt-6 flex space-x-2'>
          <Tooltip delay={0} closeDelay={100} content='My Github Profile'>
            <Link
              href={'https://github.com/moriyoshi-kasuga'}
              target='_blank'
              className='rounded-lg bg-default-700 p-2 transition-transform hover:scale-110'
            >
              <FaGithub className='text-4xl' />
            </Link>
          </Tooltip>
          <Tooltip delay={0} closeDelay={100} content='This Portfolio Repository'>
            <Link
              href={'https://github.com/moriyoshi-kasuga/portfolio'}
              target='_blank'
              className='rounded-lg bg-default-700 p-2 transition-transform hover:scale-110'
            >
              <IoIosGitBranch className='text-4xl' />
            </Link>
          </Tooltip>
          <Tooltip delay={0} closeDelay={100} content='My Twitter Profile'>
            <Link
              href={'https://twitter.com/MoriyoshiKasuga'}
              target='_blank'
              className='rounded-lg bg-default-700 p-2 transition-transform hover:scale-110'
            >
              <FaXTwitter className='text-4xl' />
            </Link>
          </Tooltip>
        </div>
        <div className='my-20 text-center font-mono text-xl font-bold'>
          毎日手をつけようと頑張っているこの頃
        </div>
        <div className='container mt-20 flex max-w-[1200px] flex-wrap'>
          <h2 className='mb-10 w-full text-center font-mono text-5xl'>Projects</h2>
          <div className='flex w-1/2 flex-wrap items-center justify-center md:w-4/5'>
            {showProjects.map((project) => (
              <Link
                key={project}
                href={`/projects/${project}`}
                className='group md:w-1/3'
              >
                <div className='mx-4 my-2 flex flex-col items-center justify-center rounded-2xl bg-primary-400 p-4'>
                  <Image
                    src={`/projects/${project}/image.png`}
                    alt={`${project} image`}
                    className='aspect-square h-40 w-40 rounded-lg object-cover'
                    width={160}
                    height={160}
                  />
                  <p className="text-lg font-bold transition-all group-hover:scale-110 group-hover:before:content-['>'] group-hover:after:content-['<'] md:text-xl">
                    {project}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className='flex w-1/2 flex-col items-center justify-center md:w-1/5'>
            <p className='mb-2 text-center font-mono-jp text-2xl font-medium'>
              つくったもの
            </p>
            <div className='flex items-center justify-center'>
              <Link href={'/projects'}>
                <div className='flex rounded-xl bg-warning-300 px-4 py-3 font-medium text-black duration-500 hover:bg-black hover:text-warning-300'>
                  もっと見る!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: すこし見やすく、言語とかは色付けたりunderlineつけてもいいかも */}
      <div className='flex w-2/3 min-w-unit-md flex-col items-center justify-center'>
        <h2 className='mb-10 w-full text-center font-mono text-5xl'>About me</h2>
        <div className='flex items-center gap-x-3'>
          <Image
            src={'/mori.png'}
            alt='My Avatar'
            className='aspect-square rounded-full'
            width={150}
            height={150}
          />
          <div>
            <p className='text-balance text-center font-mono-jp text-lg'>
              高校生のただのプログラマー、本格的にプログラミングを学び始めたのは高校に入った2023年春ぐらいから、
              それまでは中学生の時にマイクラのプラグインを(Javaで)作っていました。
              最近はpython(django,flask),typescript(react,nextjs) などを触っています
            </p>
            <div className='mt-5 flex items-center justify-center'>
              <Link href={'/about'}>
                <div className='flex rounded-xl bg-danger-300 px-4 py-3 font-medium text-black duration-500 hover:bg-black hover:text-danger-300'>
                  もっと知る!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
