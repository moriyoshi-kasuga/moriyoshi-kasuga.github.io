import fs from 'fs';
import matter from 'gray-matter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ProjectMetaData = {
  name: string;
  title: string;
  description: string;
  cretedAt: string;
  genre: string;
  github?: string;
  site?: string;
  technology: string[];
  objective: string;
  background: string;
  commitment: string;
  gallery?: string[];
  content: string;
};

export const getProject = (name: string): ProjectMetaData | null => {
  const folder = 'src/projects/';
  const file = `${folder}${name}.md`;
  if (!fs.existsSync(file)) {
    return null;
  }
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return {
    ...matterResult.data,
    content: matterResult.content,
  } as ProjectMetaData;
};

export const getProjects = (): ProjectMetaData[] => {
  const folder = 'src/projects/';
  const files = fs.readdirSync(folder);
  const markdownProjects = files.filter((file) => file.endsWith('.md'));
  const projects = markdownProjects
    .map((name) => {
      const fileContent = fs.readFileSync(`src/projects/${name}`, 'utf8');
      const matterData = matter(fileContent);
      return {
        ...matterData.data,
        content: matterData.content,
        name: name.replace('.md', ''),
      } as ProjectMetaData;
    })
    .sort((a, b) => new Date(b.cretedAt).valueOf() - new Date(a.cretedAt).valueOf());
  return projects;
};
