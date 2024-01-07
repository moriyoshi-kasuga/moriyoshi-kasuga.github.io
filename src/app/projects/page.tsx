import projects from '@/projects/projects';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className='gap-4'>
        {projects.map((project) => (
          <Link key={project.name} className='text-xl' href={`/projects/${project.name}`}>
            {project.name}
          </Link>
        ))}
      </div>
    </>
  );
}
