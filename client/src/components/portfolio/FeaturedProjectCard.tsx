import { motion } from "framer-motion";
import { ExternalLink, Github, Maximize2, Play } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getFeaturedProjects, getProjectById } from "@/lib/projects";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-4xl">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          {videoUrl ? (
            <iframe 
              src={videoUrl} 
              className="w-full h-full" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/70">
              <p className="text-center">Video content would play here.<br/>This is a demo placeholder.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface FeaturedProjectCardProps {
  onProjectClick?: (id: string) => void;
}

export function FeaturedProjectCard({ onProjectClick }: FeaturedProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredProjects = getFeaturedProjects(1);
  const project = featuredProjects[0] || getProjectById("1");
  
  const { featuredProject } = PORTFOLIO_DATA;
  const videoUrl = featuredProject?.videoUrl || "";
  const githubUrl = project?.githubUrl || featuredProject?.githubUrl || "";
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project.id);
    } else {
      openModal();
    }
  };

  const openGithub = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };
  
  return (
    <>
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-[20px] overflow-hidden relative cursor-pointer group"
        onClick={handleCardClick}
      >
        {/* Project title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-30 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
        </div>

        {/* Featured project image */}
        <div className="relative overflow-hidden aspect-video">
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
            <div className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-colors">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
            
            {githubUrl && (
              <div 
                className="bg-white/30 backdrop-blur-sm rounded-full p-3 hover:bg-white/40 transition-colors"
                onClick={openGithub}
              >
                <Github className="h-8 w-8 text-white" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
      
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        videoUrl={videoUrl ? `https://www.youtube.com/embed/${videoUrl.split('v=')[1] || 'dQw4w9WgXcQ'}` : undefined}
      />
    </>
  );
}
