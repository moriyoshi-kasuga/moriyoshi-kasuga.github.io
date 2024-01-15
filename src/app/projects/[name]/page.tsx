import projects from '@/projects/projects';
import { Divider, Tooltip } from '@nextui-org/react';
import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';
import Image from 'next/image';

const ProjectLink = ({
  url,
  title,
  icon,
}: {
  url?: string;
  title?: string;
  icon?: React.ReactNode;
}) => {
  if (url) {
    return (
      <Link href={url} className='btn ring-2 ring-black hover:text-white' target='_blank'>
        {title}
        {icon}
      </Link>
    );
  }
  return (
    <div className='base-btn bg-gray-400 line-through'>
      {title}
      {icon}
    </div>
  );
};

export default function Page({ params: { name } }: { params: { name: string } }) {
  const project = projects.find((project) => project.name == name);
  if (!project) {
    return <div>Project not found. {name}</div>;
  }
  return (
    <>
      <h1 className='my-2 text-center font-serif-jp text-5xl'>{project.title}</h1>
      <p className='text-center font-sans-jp'>{project.description}</p>
      <div className='my-5 flex justify-center gap-x-8 gap-y-4 max-sm:flex-col'>
        <div className='flex items-center p-4 md:justify-center'>
          <div className='group relative ml-auto'>
            <Tooltip
              content='公開日'
              color='foreground'
              delay={0}
              closeDelay={100}
              className='max-sm:hidden'
            >
              <div className='flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-xl shadow-xl duration-300 hover:shadow-2xl md:rounded-full'>
                <FaProjectDiagram className='text-white' />
              </div>
            </Tooltip>
            <div className='absolute -top-[30px] z-10 flex w-40 rounded-md bg-black p-2 text-white duration-300 md:-left-12 md:top-12 md:justify-center md:rounded-lg md:opacity-0'>
              <p>公開日</p>
            </div>
          </div>
          <p className='ml-2 mt-2 max-sm:w-1/2 md:mt-0'>{project.cretedAt}</p>
        </div>
        <div className='flex items-center p-4 md:justify-center'>
          <div className='group relative ml-auto'>
            <Tooltip
              content='ジャンル'
              color='foreground'
              delay={0}
              closeDelay={100}
              className='max-sm:hidden'
            >
              <div className='flex cursor-pointer items-center justify-center rounded-md bg-black p-2 text-xl shadow-xl duration-300 hover:shadow-2xl md:rounded-full'>
                <BiSolidCategoryAlt className='text-white' />
              </div>
            </Tooltip>
            <div className='absolute -top-[30px] z-10 flex w-40 rounded-md bg-black p-2 text-white duration-300 md:-left-12 md:top-12 md:justify-center md:rounded-lg md:opacity-0'>
              <p>ジャンル</p>
            </div>
          </div>
          <p className='ml-2 mt-2 max-sm:w-1/2 md:mt-0'>{project.genre}</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        <ProjectLink url={project.github} title='GitHub' icon={<FaGithub />} />
        <ProjectLink url={project.site} title='Site' icon={<FaLink />} />
      </div>
      <Divider className='mx-auto mt-5 w-11/12' />
      <div className='container mx-auto my-5'>
        <h2 className='text-center font-serif-jp text-3xl'>技術</h2>
        <div className='flex flex-wrap justify-center font-sans-jp'>
          {project.technology.map((str) => {
            return (
              <p className='m-1 p-1' key={str}>
                {str}
              </p>
            );
          })}
        </div>
        <div className='my-16 flex flex-wrap items-stretch justify-center gap-y-4'>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-success-300'>
              <p className='my-auto p-4'>{project.objective}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 text-lg'>
                目的
              </h3>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-warning-300'>
              <p className='my-auto p-4'>{project.background}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 text-lg'>
                背景
              </h3>
            </div>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <div className='relative m-2 flex h-full border-2 border-dotted border-primary-300'>
              <p className='my-auto p-4'>{project.commitment}</p>
              <h3 className='absolute -top-6 left-4 rounded-xl bg-white p-2 text-lg'>
                こだわり
              </h3>
            </div>
          </div>
        </div>
        <div className='w-full rounded-xl px-12 pb-4 pt-2 shadow-md'>
          {project.content}
        </div>
        <div className='relative m-4 mb-40 mt-20 rounded-xl border-2 border-double border-black'>
          <div className='absolute inset-x-0 -top-6 flex justify-center'>
            <h3 className='rounded-2xl bg-white px-4 text-center font-mono-jp text-2xl'>
              ギャラリー
            </h3>
          </div>
          <div className='flex flex-wrap justify-center p-4'>
            {project.gallery?.map((path) => {
              return (
                <Image
                  src={`/projects/${project.name}/${path}`}
                  alt={path}
                  key={path}
                  className='!relative rounded-xl object-contain p-2 md:!w-1/2'
                  fill
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
