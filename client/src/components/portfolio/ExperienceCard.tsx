import { motion } from "framer-motion";
import { Maximize2, Briefcase } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  className?: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ExperienceModal({ isOpen, onClose }: ExperienceModalProps) {
  const { clients } = PORTFOLIO_DATA;
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl bg-background rounded-xl p-8 border border-border">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
          aria-label="Close experience modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold text-foreground mb-6">Work Experience</h2>
        
        <div className="grid grid-cols-1 gap-4">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-muted transition-colors">
              <span className="text-2xl mr-4 bg-primary/10 p-2 rounded-full text-primary">
                <Briefcase className="h-5 w-5" />
              </span>
              <div>
                <span className="text-foreground text-lg font-medium block">{client.name}</span>
                <span className="text-foreground/60 text-sm">{client.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceCard({ className }: ExperienceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={cn(
          "bg-card rounded-lg border border-border overflow-hidden relative cursor-pointer group h-full", 
          className
        )}
        onClick={openModal}
      >
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-primary/10 backdrop-blur-sm rounded-full p-1">
            <Maximize2 className="h-3 w-3 text-primary" />
          </div>
        </div>
        
        <div className="h-full flex flex-col justify-center items-center p-6">
          <div className="flex-grow flex items-center justify-center">
            <Briefcase className="text-primary h-10 w-10" />
          </div>
          
          <p className="text-sm font-medium text-foreground/90 mt-auto">Experience</p>
        </div>
      </motion.div>
      
      <ExperienceModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
} 