import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2 } from "lucide-react";
import { useEffect, useState } from "react";
import { getFeaturedProjects, Project } from "@/lib/projects";

interface ProjectSlideProps {
  project: Project;
  onProjectClick?: (id: string) => void;
}

function ProjectSlide({ project, onProjectClick }: ProjectSlideProps) {
  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project.id);
    }
  };

  const openGithub = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  };

  const openLiveUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[20px] overflow-hidden relative cursor-pointer group h-full"
      onClick={handleCardClick}
    >
      {/* Project title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-30 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white text-xl font-bold">{project.title}</h3>
        <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
      </div>

      {/* Project image */}
      <div className="relative overflow-hidden aspect-video h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <Maximize2 className="h-3 w-3 text-white" />
        </div>
        
        {/* Action buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 z-20">
          {project.githubUrl && (
            <div 
              className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-colors"
              onClick={openGithub}
              title="GitHub Repository"
            >
              <Github className="h-8 w-8 text-white" />
            </div>
          )}
          
          {project.liveUrl && (
            <div 
              className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-colors"
              onClick={openLiveUrl}
              title="Live Demo"
            >
              <ExternalLink className="h-8 w-8 text-white" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

interface FeaturedProjectCardProps {
  onProjectClick?: (id: string) => void;
}

export function FeaturedProjectCard({ onProjectClick }: FeaturedProjectCardProps) {
  const featuredProjects = getFeaturedProjects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay && featuredProjects.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, featuredProjects.length]);
  
  const goToNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAutoplay(false); // Stop autoplay when manually navigating
    setCurrentIndex(prevIndex => 
      prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAutoplay(false); // Stop autoplay when manually navigating
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
    );
  };
  
  if (featuredProjects.length === 0) {
    return (
      <div className="rounded-[20px] bg-gray-100 aspect-video flex items-center justify-center">
        <p className="text-gray-500">No featured projects available</p>
      </div>
    );
  }
  
  return (
    <div className="relative rounded-[20px] overflow-hidden">
      {/* Current project slide */}
      <ProjectSlide 
        project={featuredProjects[currentIndex]} 
        onProjectClick={onProjectClick}
      />
      
      {/* Navigation controls (only show if there's more than one project) */}
      {featuredProjects.length > 1 && (
        <>
          {/* Left arrow */}
          <button 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 z-40 transition-colors"
            onClick={goToPrevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          
          {/* Right arrow */}
          <button 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 rounded-full p-2 z-40 transition-colors"
            onClick={goToNextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2">
            {featuredProjects.map((_, index) => (
              <button 
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
