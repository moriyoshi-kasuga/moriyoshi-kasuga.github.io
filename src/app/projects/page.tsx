import projects from '@/projects/projects';

export default function Page() {
  return (
    <>
      <div className='gap-4'>
        {projects.map((project) => (
          <a key={project.name} className='text-xl' href={`/projects/${project.name}`}>{project.name}</a>          
        ))}
      </div>
    </>
  );
}
