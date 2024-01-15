import projects from '@/projects/projects';
import { Divider, Tooltip } from '@nextui-org/react';
import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { FaProjectDiagram } from 'react-icons/fa';

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
        <div className='flex flex-wrap justify-center'>
          {project.technology.map((str) => {
            return (
              <p className='m-1 p-1' key={str}>
                {str}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}
