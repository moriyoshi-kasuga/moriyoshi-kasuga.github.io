import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosGitBranch } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import IconButton from '@/components/IconButton';
import { getProject } from '@/lib/projects';

const showProjects = ['portfolio-v1', 'dotfiles', 'ryama-v1'];

export default function Home() {
  return (
    <div className='min-h-all flex w-full flex-col items-center bg-primary-300 py-10 text-zinc-100'>
      <div className='flex flex-col items-center'>
        <h1 className='font-mono-jp text-7xl font-semibold'>MoriLab</h1>
        <h2 className='font-mono text-3xl'>Mori Programmer Lab</h2>
        <div className='mt-6 flex flex-wrap items-center justify-center gap-2 px-4'>
          <IconButton
            content='Github'
            url='https://github.com/moriyoshi-kasuga'
            icon=<FaGithub />
          />
          <IconButton
            content='Repository'
            url='https://github.com/moriyoshi-kasuga/portfolio'
            icon=<IoIosGitBranch />
          />
          <IconButton
            content='Twitter'
            url='https://twitter.com/MoriyoshiKasuga'
            icon=<FaXTwitter />
          />
        </div>
        <div className='container my-20 text-center font-mono-jp text-2xl'>
          毎日手をつけようと頑張っているこの頃
        </div>
        <div className='container mt-10 flex max-w-[1200px] flex-wrap'>
          <h2 className='mb-10 w-full text-center font-mono text-5xl'>Projects</h2>
          <div className='flex w-1/2 flex-wrap items-center justify-center md:w-4/5'>
            {showProjects.map((p) => {
              const project = getProject(p);
              if (!project) {
                return null;
              }
              return (
                <Link
                  key={project.name}
                  href={`/projects/${p}`}
                  className='group md:w-1/3'
                >
                  <div className='mx-4 my-2 flex flex-col items-center justify-center rounded-2xl'>
                    <Image
                      src={`/projects/${p}/main.png`}
                      alt={`${p} image`}
                      className='aspect-square rounded-lg'
                      width={160}
                      height={160}
                    />
                    <p className="text-md relative text-nowrap font-mono-jp font-semibold transition-all before:absolute before:-left-3 after:absolute group-hover:scale-110 group-hover:before:content-['>'] group-hover:after:content-['<'] md:text-lg">
                      {project.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className='flex w-1/2 flex-col items-center justify-center md:w-1/5'>
            <p className='mb-2 text-center font-mono-jp text-2xl font-semibold'>
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
      <div className='mt-8 flex w-2/3 flex-col items-center justify-center'>
        <h2 className='mb-10 w-full text-center font-mono text-5xl'>About me</h2>
        <div className='flex flex-wrap items-center justify-center gap-x-3 md:flex-nowrap'>
          <Image
            src={'/mori.png'}
            alt='My Avatar'
            className='aspect-square rounded-full'
            width={150}
            height={150}
          />
          <div>
            <p className='max-w-xl font-mono-jp font-medium text-white sm:text-lg md:text-xl'>
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
