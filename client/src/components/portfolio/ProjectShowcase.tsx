import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { Github, ExternalLink } from "lucide-react";

interface ProjectShowcaseProps {
  projects: {
    title: string;
    url: string;
    description: string;
    githubUrl?: string;
  }[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <motion.section variants={fadeUpVariants} custom={4}>
      <h2 className="text-xl font-bold mb-4 flex items-center text-foreground">
        <span className="bg-primary/10 p-2 rounded-full mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
        </span>
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            className="bg-card rounded-lg border border-border overflow-hidden"
          >
            <div className="aspect-video relative">
              <iframe
                src={project.url}
                className="w-full h-full"
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-foreground/70 text-sm">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 