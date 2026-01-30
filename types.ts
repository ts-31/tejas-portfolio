export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'web' | 'backend' | 'open-source' | 'all';
  github: string;
  live?: string;
}

export interface Skill {
  name: string;
  icon: string;
}
