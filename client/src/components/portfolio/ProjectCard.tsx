import { motion } from "framer-motion";
import { Link } from "wouter";
import type { Project } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
    >
      <div className="relative">
        <Link href={`/project/${project.id}`}>
          <div 
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url("${project.thumbnailUrl || project.imageUrl}")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-medium">View Details</span>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg truncate">{project.title}</h3>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{project.category}</span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            {(project.deploymentUrl || project.liveUrl) && (
              <a 
                href={project.deploymentUrl || project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}