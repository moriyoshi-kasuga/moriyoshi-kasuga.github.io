export interface Project {
  name: string;
  title: string;
  description: string;
  createdAt: string;
  genre: string;
  github?: string;
  site?: string;
  technology: string[];
  objective: string;
  background: string;
  commitment: string;
  gallery: string[];

  pin?: boolean;
}

export interface Skill {
  title: string;
  learn: number;
}
