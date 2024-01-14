import projects from '@/projects/projects';
import { Divider } from '@nextui-org/react';
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
      <Link href={url} className='btn ring-2 ring-black hover:text-white'>
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
      <div className='my-5 flex justify-center gap-x-8'>
        <div className='flex items-center'>
          <div className='mr-3 rounded-full p-4 ring-2 ring-default-400'>
            <FaProjectDiagram />
          </div>
          <span className='font-sans-jp text-xl'>{project.cretedAt}</span>
        </div>
        <div className='flex items-center'>
          <div className='mr-3 rounded-full p-4 ring-2 ring-default-400'>
            <BiSolidCategoryAlt />
          </div>
          <span className='font-sans-jp text-xl'>{project.genre}</span>
        </div>
      </div>
      <div className='flex justify-center gap-x-8'>
        <ProjectLink url={project.github} title='GitHub' icon={<FaGithub />} />
        <ProjectLink url={project.site} title='Site' icon={<FaLink />} />
      </div>
      <Divider className='mt-5 w-11/12 mx-auto' />
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
