import { motion } from "framer-motion";
import { Maximize2, Play } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { getFeaturedProjects } from "@/lib/projects";

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
  const project = featuredProjects[0] || {
    id: "1",
    title: "Flamingo Tropical Experience",
    description: "Beautiful tropical scene featuring a flamingo among exotic plants",
    imageUrl: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  };
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project.id);
    } else {
      openModal();
    }
  };
  
  return (
    <>
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-[#FDD5A6] rounded-3xl overflow-hidden relative cursor-pointer group"
        onClick={handleCardClick}
      >
        {/* Featured project image */}
        <div className="h-[180px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FDD5A6]/30 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url("${project.imageUrl}")` 
            }}
          >
          </div>
          <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="h-4 w-4 text-white" />
          </div>
        </div>
        
        <div className="p-4 pb-10 relative">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <p className="text-sm text-gray-700 mt-1">{project.description}</p>
          
          <div className="absolute -right-2 -bottom-2 w-16 h-16 rounded-full flex items-center justify-center bg-[#FDD5A6] group-hover:scale-110 transition-transform">
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
              <Play className="h-4 w-4 text-white ml-0.5" />
            </div>
          </div>
        </div>
      </motion.div>
      
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        videoUrl={project.liveUrl} 
      />
    </>
  );
}
