import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Clock, User, Layers } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { getProjectById, getRelatedProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUpVariants, slideInLeftVariants, slideInRightVariants } from "@/lib/animations";
import { PageTransition, StaggerChildren } from "@/components/ui/loading-animation";

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
    <PageTransition>
      <div className="bg-background min-h-[calc(100vh-65px)]">
        {/* Header with back button */}
        <div className="sticky top-0 bg-background z-10 border-b border-border px-6 py-4">
          <motion.button 
            onClick={onBack} 
            className="flex items-center text-foreground/70 hover:text-primary transition-colors"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Projects</span>
          </motion.button>
        </div>
        
        <div className="max-w-4xl mx-auto py-8 px-6">
          <StaggerChildren staggerDelay={0.1} containerDelay={0.2}>
            {/* Project Header */}
            <motion.div className="mb-8" variants={fadeUpVariants}>
              <h1 className="text-3xl font-bold mb-2 text-foreground">{project.title}</h1>
              
              <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  {(project.deploymentUrl || project.liveUrl) && (
                    <a 
                      href={project.deploymentUrl || project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary flex items-center gap-1 transition-colors"
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
                      className="text-foreground/70 hover:text-primary flex items-center gap-1 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Project Image */}
            <motion.div 
              className="mb-8 rounded-lg overflow-hidden" 
              variants={fadeUpVariants}
              custom={1}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.01]" 
              />
            </motion.div>
            
            {/* Project Details */}
            <motion.div 
              className="mb-8 grid md:grid-cols-4 gap-6"
              variants={fadeUpVariants}
              custom={2}
            >
              <motion.div 
                className="md:col-span-3"
                variants={slideInLeftVariants}
              >
                <h2 className="text-xl font-bold mb-4 text-foreground">Project Overview</h2>
                <div className="prose max-w-none text-foreground/80">
                  <p className="mb-4">{project.description}</p>
                  <p>{project.fullDescription}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-secondary p-4 rounded-lg"
                variants={slideInRightVariants}
              >
                <h3 className="font-medium mb-4 text-foreground">Project Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-1 text-foreground/50" />
                    <div>
                      <p className="text-sm text-foreground/50">Year</p>
                      <p className="text-sm font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <User className="h-4 w-4 mt-1 text-foreground/50" />
                    <div>
                      <p className="text-sm text-foreground/50">Client</p>
                      <p className="text-sm font-medium text-foreground">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Layers className="h-4 w-4 mt-1 text-foreground/50" />
                    <div>
                      <p className="text-sm text-foreground/50">Category</p>
                      <p className="text-sm font-medium capitalize text-foreground">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <motion.div variants={fadeUpVariants} custom={3}>
                <h2 className="text-xl font-bold mb-4 text-foreground">Related Projects</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedProjects.map((relatedProject, index) => (
                    <motion.div 
                      key={relatedProject.id}
                      variants={fadeUpVariants}
                      custom={index + 4}
                      onClick={() => {
                        if (relatedProject.id !== id) {
                          window.scrollTo(0, 0);
                        }
                      }}
                    >
                      <ProjectCard project={relatedProject} index={index} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </StaggerChildren>
        </div>
      </div>
    </PageTransition>
  );
}