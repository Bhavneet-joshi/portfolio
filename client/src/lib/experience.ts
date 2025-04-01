export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  skills: string[];
  logo?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "exp1",
    position: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "New York, NY",
    startDate: "Jan 2021",
    endDate: "Present",
    description: "Leading the development of enterprise web applications using React, Node.js, and PostgreSQL. Responsible for architecture design and team management.",
    achievements: [
      "Led the development of a customer portal that increased user engagement by 45%",
      "Implemented CI/CD pipeline that reduced deployment time by 60%",
      "Mentored 5 junior developers across different projects"
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    logo: "/assets/p1.png"
  },
  {
    id: "exp2",
    position: "Frontend Developer",
    company: "Digital Innovations Inc",
    location: "Boston, MA",
    startDate: "Mar 2018",
    endDate: "Dec 2020",
    description: "Developed responsive and interactive web applications using React and related technologies. Focused on creating intuitive user interfaces and optimizing performance.",
    achievements: [
      "Rebuilt the company's flagship product using React, improving performance by 35%",
      "Developed a component library that was used across 3 different products",
      "Worked closely with UX/UI designers to implement modern design patterns"
    ],
    skills: ["React", "JavaScript", "HTML/CSS", "Redux", "Webpack", "Jest"],
    logo: "/assets/p2.png"
  },
  {
    id: "exp3",
    position: "Web Developer",
    company: "CreativeTech Studios",
    location: "San Francisco, CA",
    startDate: "Jun 2016",
    endDate: "Feb 2018",
    description: "Worked in a fast-paced agency environment developing websites and web applications for various clients across different industries.",
    achievements: [
      "Developed 15+ client websites with a focus on responsive design and SEO",
      "Implemented an internal CMS that improved content management efficiency by 40%",
      "Received client satisfaction score of 4.8/5 across all projects"
    ],
    skills: ["JavaScript", "PHP", "WordPress", "jQuery", "CSS/SASS", "MySQL"],
    logo: "/assets/p3.png"
  }
];

export function getExperienceById(id: string): Experience | undefined {
  return EXPERIENCES.find(exp => exp.id === id);
}