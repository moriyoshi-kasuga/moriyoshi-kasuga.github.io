import projects from '@/projects/projects';

export default function Page({ params: { name } }: { params: { name: string } }) {
  const project = projects.find((project) => project.name == name);
  if (!project) {
    return <div>Project not found. {name}</div>;
  }
  return (
    <>
      <div>{project.title}</div>
      <div>{project.cretedAt}</div>
      <div>{project.objective}</div>
      <div>{project.commitment}</div>
    </>
  );
}
