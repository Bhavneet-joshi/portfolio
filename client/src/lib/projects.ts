export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  thumbnailUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  deploymentUrl?: string;
  year: number;
  client: string;
  category: "web" | "mobile" | "design" | "other";
  featured?: boolean;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "construction_website",
    title: "Construction Website",
    description: "Responsive website for a construction company.",
    fullDescription: "Developed a responsive website for a construction company using React.js, TypeScript, and Bootstrap. Features include project showcases, service offerings, and company information in a modern design.",
    technologies: ["TypeScript", "React.js", "Bootstrap", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/construction_website",
    liveUrl: "https://cons-ruddy.vercel.app",
    year: 2023,
    client: "BuildRight Construction",
    category: "web",
    featured: true,
    tags: ["TypeScript", "React.js", "Bootstrap", "Responsive Design"]
  },
  {
    id: "picture_pass",
    title: "Picture Pass",
    description: "Dynamic image display application with API integration.",
    fullDescription: "Developed a dynamic image display application using React.js, Tailwind CSS, and Material UI. Integrated external APIs for real-time images. Created a responsive and visually appealing UI.",
    technologies: ["JavaScript", "React.js", "Tailwind CSS", "Material UI", "API Integration"],
    imageUrl: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/Picture_Pass",
    liveUrl: "https://picture-pass.vercel.app/",
    year: 2023,
    client: "Personal Project",
    category: "web",
    featured: true,
    tags: ["JavaScript", "React.js", "Tailwind CSS", "Material UI", "API Integration"]
  },
  {
    id: "commapp",
    title: "CommApp",
    description: "Real-time communication platform with authentication.",
    fullDescription: "Built a real-time communication platform using JavaScript, Node.js, and Express.js. Implemented authentication and instant messaging features to create a comprehensive community management solution.",
    technologies: ["JavaScript", "Node.js", "Express.js", "Authentication"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/commapp",
    liveUrl: "https://communion-app-sigma.vercel.app",
    year: 2023,
    client: "Community Connect",
    category: "web",
    featured: true,
    tags: ["JavaScript", "Node.js", "Express.js", "Authentication", "Real-time"]
  },
  {
    id: "communion-app",
    title: "Communion App",
    description: "CSS-focused community interaction platform.",
    fullDescription: "Developed a community interaction platform with a focus on CSS for styling and design. Created an aesthetically pleasing user interface with responsive layouts and animations.",
    technologies: ["CSS", "HTML", "JavaScript", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/communion-app",
    liveUrl: "https://communion-app-sigma.vercel.app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    featured: false,
    tags: ["CSS", "HTML", "JavaScript", "Responsive Design", "UI/UX"]
  },
  {
    id: "clock-app",
    title: "Clock App",
    description: "Digital clock with multiple time zones and themes.",
    fullDescription: "Created a digital clock application using TypeScript and CSS. Added customizable features including multiple time zones and themes. Ensured responsive design for cross-device compatibility.",
    technologies: ["TypeScript", "CSS", "HTML", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1550534791-2677533605ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1550534791-2677533605ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/clock-app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    featured: false,
    tags: ["TypeScript", "CSS", "HTML", "UI/UX", "Time Management"]
  },
  {
    id: "interactive-box",
    title: "Interactive Box",
    description: "Dynamic UI elements showcase with modern design patterns.",
    fullDescription: "Created a dynamic showcase of interactive UI elements using modern web development techniques. This project demonstrates principles of effective user interaction design and responsive interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/interactive-box",
    liveUrl: "https://interactive-box-chi.vercel.app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    featured: false,
    tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Interactive Design"]
  },
  {
    id: "port_folio",
    title: "Portfolio",
    description: "Personal portfolio website built with TypeScript.",
    fullDescription: "Developed a personal portfolio website to showcase projects and skills. Used TypeScript for type safety and enhanced development experience. Created a responsive and modern design.",
    technologies: ["TypeScript", "React", "Responsive Design", "UI/UX"],
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/port_folio",
    liveUrl: "https://port-folio-seven-mu.vercel.app",
    year: 2023,
    client: "Personal Project",
    category: "web",
    featured: true,
    tags: ["TypeScript", "React", "Portfolio", "Responsive Design"]
  },
  {
    id: "newspaper",
    title: "Newspaper Distribution",
    description: "Application for managing newspaper distribution and billing.",
    fullDescription: "Developed a full-stack application using Java for newspaper distribution management. Implemented features for tracking deliveries, managing customers, and handling billing information.",
    technologies: ["Java", "SQL", "Database Management", "Backend Development"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/Newspaper",
    year: 2022,
    client: "Media Distribution Services",
    category: "other",
    featured: false,
    tags: ["Java", "SQL", "Database", "Backend", "Business Software"]
  },
  {
    id: "medcare",
    title: "MedCare",
    description: "Healthcare management system built with HTML.",
    fullDescription: "Created a comprehensive healthcare management system for medicine donation and distribution. Built with HTML for frontend structure and design, focusing on usability and accessibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Healthcare"],
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    githubUrl: "https://github.com/Bhavneet-joshi/Medcare",
    year: 2022,
    client: "Healthcare Initiative",
    category: "web",
    featured: false,
    tags: ["HTML", "CSS", "JavaScript", "Healthcare", "UI/UX"]
  }
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(project => project.id === id);
}

export function getRelatedProjects(id: string, count: number = 3): Project[] {
  const currentProject = getProjectById(id);
  if (!currentProject) return PROJECTS.slice(0, count);
  
  return PROJECTS
    .filter(project => project.id !== id && project.category === currentProject.category)
    .slice(0, count);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return PROJECTS
    .filter(project => project.featured)
    .slice(0, count);
}
