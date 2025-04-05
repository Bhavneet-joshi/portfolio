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
    position: "Junior Engineer",
    company: "SM Core Inc.",
    location: "Remote",
    startDate: "Oct 2024",
    endDate: "Present",
    description: "Working as a Junior Engineer focusing on database management and networking.",
    achievements: [
      "Acquired extensive experience in creating complex SQL queries, including procedures and subqueries, to optimize data retrieval, manipulation, and analysis.",
      "Developed foundational networking skills to ensure seamless connectivity and communication across system components."
    ],
    skills: ["SQL", "Database Management", "Networking", "Data Analysis"],
    logo: "/assets/smc.jpg"
  },
  {
    id: "exp2",
    position: "Trainee Engineer",
    company: "Global Engineers",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Oct 2024",
    description: "Worked as a Trainee Engineer with a focus on database management and ASRS systems.",
    achievements: [
      "Gained hands-on experience in writing complex SQL queries for data retrieval, manipulation, and analysis.",
      "Assisted in the maintenance and administration of relational software that mainly focus on ASRS system."
    ],
    skills: ["SQL", "Database Management", "ASRS Systems", "Software Maintenance"],
    logo: "/assets/"
  },
  {
    id: "exp3",
    position: "Virtual Intern",
    company: "Accenture",
    location: "Remote",
    startDate: "Aug 2023",
    endDate: "Sep 2023",
    description: "Completed a virtual internship at Accenture focusing on software development and data visualization.",
    achievements: [
      "Exploration of diverse roles in the tech sector and understanding the Software Development Lifecycle (SDLC).",
      "Visualization of financial data using Matplotlib and Plotly."
    ],
    skills: ["Python", "Matplotlib", "Plotly", "SDLC", "Data Visualization"],
    logo: "/assets/acc.png"
  }
];

export function getExperienceById(id: string): Experience | undefined {
  return EXPERIENCES.find(exp => exp.id === id);
}
