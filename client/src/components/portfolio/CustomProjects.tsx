import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CustomProjectProps {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  type: "Backend" | "Frontend" | "Full-Stack";
  imageKeyword: string;
  github?: string;
}

const CustomProjects = () => {
  // Custom projects as mentioned in the resume
  const projects: CustomProjectProps[] = [
    {
      id: 1,
      name: "Newspaper App",
      description: "Crafting the Newspaper App offered immersive exposure to full-stack development, synergizing Java's backend logic with SQL's database management for a robust system encompassing newspaper distribution, billing, and assignments.",
      technologies: ["Java", "SQL", "JDBC", "Database Design"],
      type: "Full-Stack",
      imageKeyword: "newspaper",
      github: "https://github.com/Bhavneet-joshi"
    },
    {
      id: 2,
      name: "Picture Pass",
      description: "Used React.js for dynamic data integration from external APIs. Employed Tailwind CSS and Material UI for an adaptive, visually appealing interface.",
      technologies: ["React.js", "API Integration", "Tailwind CSS", "Material UI"],
      type: "Frontend",
      imageKeyword: "gallery",
      github: "https://github.com/Bhavneet-joshi"
    },
    {
      id: 3,
      name: "Medcare",
      description: "Created a user-friendly platform for seamless medicine donation and distribution using Bootstrap, Node.js, MySQL, and Tailwind CSS. Utilized Tailwind CSS and Material UI for a responsive and appealing design.",
      technologies: ["Node.js", "MySQL", "Bootstrap", "Tailwind CSS", "Material UI"],
      type: "Full-Stack",
      imageKeyword: "healthcare",
      github: "https://github.com/Bhavneet-joshi"
    }
  ];

  return (
    <section
      id="custom-projects"
      className="py-10 opacity-0 animate-fade-in animation-delay-500"
    >
      <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12">
        <h2 className="text-3xl font-bold text-text mb-8">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="h-48 bg-primary/10 relative overflow-hidden">
                <img 
                  src={`https://source.unsplash.com/random/500x300/?${project.imageKeyword}&sig=${project.id}`}
                  alt={`${project.name} Preview`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-background-card px-3 py-1 rounded-full text-xs font-medium text-primary">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text">{project.name}</h3>
                <p className="text-text-secondary mt-2 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-primary/10 px-2 py-1 rounded text-xs font-medium text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                    aria-label={`View ${project.name} project`}
                    title={`Visit project on GitHub`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomProjects; 