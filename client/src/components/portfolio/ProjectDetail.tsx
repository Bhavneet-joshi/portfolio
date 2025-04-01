import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Clock, User, Layers } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { getProjectById, getRelatedProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

export function ProjectDetail({ id, onBack }: ProjectDetailProps) {
  const project = getProjectById(id);
  const relatedProjects = getRelatedProjects(id, 2);
  
  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-65px)]">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Button onClick={onBack}>Back to Projects</Button>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-[calc(100vh-65px)]"
    >
      {/* Header with back button */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-6 py-4">
        <button onClick={onBack} className="flex items-center text-gray-700 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back to Projects</span>
        </button>
      </div>
      
      <div className="max-w-4xl mx-auto py-8 px-6">
        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          
          <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-sm">Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Project Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover rounded-lg" 
          />
        </div>
        
        {/* Project Details */}
        <div className="mb-8 grid md:grid-cols-4 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold mb-4">Project Overview</h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">{project.description}</p>
              <p>{project.fullDescription}</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Project Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-1 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Year</p>
                  <p className="text-sm font-medium">{project.year}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <User className="h-4 w-4 mt-1 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="text-sm font-medium">{project.client}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Layers className="h-4 w-4 mt-1 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="text-sm font-medium capitalize">{project.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Related Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <div 
                  key={relatedProject.id}
                  onClick={() => {
                    if (relatedProject.id !== id) {
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  <ProjectCard project={relatedProject} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}