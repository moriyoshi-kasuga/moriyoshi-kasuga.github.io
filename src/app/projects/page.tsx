import projects from '@/projects/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FaProjectDiagram } from 'react-icons/fa';

export default function Page() {
  return (
    <>
      <div className='min-h-all'>
        <h1 className='flex justify-center gap-x-2 font-mono-jp text-5xl font-bold'>
          <FaProjectDiagram />
          Projects
        </h1>
        <div className='container mx-auto my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-12'>
          {projects.map((project) => (
            <Link
              href={`/projects/${project.name}`}
              className='flex h-fit w-full flex-col rounded-2xl px-8 py-2 ring-[3px] ring-primary-300 transition-all hover:scale-105 hover:ring-primary-500'
              key={project.name}
            >
              <h2 className='text-center font-mono-jp text-2xl font-bold'>
                {project.title}
              </h2>
              <div className='relative my-2 aspect-square w-full'>
                <Image
                  src={`/projects/${project.name}/main.png`}
                  alt={project.title}
                  className='w-full rounded-xl object-cover'
                  fill
                  sizes='(100%,100%)'
                />
              </div>
              <div className='flex flex-wrap items-start gap-2 text-lg'>
                {project.technology.map((tag) => (
                  <span
                    key={tag}
                    className='rounded-xl bg-warning-300 px-2 py-1 font-sans-jp font-thin text-default-900'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='break-words py-2 font-sans-jp text-xl'>
                {project.description}
              </div>
              <span className='ml-auto font-mono font-thin'>{project.cretedAt}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
