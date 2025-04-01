import { motion } from "framer-motion";
import { Award, Maximize2 } from "lucide-react";
import { useState } from "react";
import { CountUp } from "./CountUp";
import { PORTFOLIO_DATA } from "@/lib/constants";

interface AwardsCardProps {
  count: number;
}

interface AwardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AwardsModal({ isOpen, onClose }: AwardsModalProps) {
  const { awards } = PORTFOLIO_DATA;
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-8">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-amber-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <Award className="mr-2" /> Global Design Awards
        </h2>
        
        <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
          {awards.map((award, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-md rounded-lg p-4 hover:bg-white/30 transition-colors">
              <h3 className="font-bold text-white text-xl">{award.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-white/70">{award.organization}</span>
                <span className="bg-white/20 rounded-full px-3 py-1 text-sm">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface VisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function VisualizerModal({ isOpen, onClose }: VisualizerModalProps) {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl p-6">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-purple-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-black rounded-xl overflow-hidden">
          <div className="aspect-square w-full flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-50 animate-pulse"></div>
            <div className="absolute">
              <div className="rounded-full bg-gradient-to-br from-blue-300 to-pink-300 w-48 h-48 flex items-center justify-center animate-pulse">
                <div className="rounded-full bg-gradient-to-tl from-blue-400 to-pink-400 w-36 h-36 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AwardsCard({ count }: AwardsCardProps) {
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);
  
  return (
    <>
      <div className="flex gap-5 h-full">
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-black rounded-[20px] overflow-hidden relative cursor-pointer group flex-1"
          onClick={() => setIsVisualizerOpen(true)}
        >
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
              <Maximize2 className="h-3 w-3 text-white" />
            </div>
          </div>
          
          <div className="h-full flex items-center justify-center p-5">
            <div className="rounded-full bg-gradient-to-br from-blue-300 to-pink-300 w-24 h-24 flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-tl from-blue-400 to-pink-400 w-16 h-16 flex items-center justify-center">
                <div className="rounded-full bg-white w-4 h-4"></div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-[#FFAA5A] rounded-[20px] overflow-hidden relative cursor-pointer group flex-1"
          onClick={() => setIsAwardsModalOpen(true)}
        >
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
              <Maximize2 className="h-3 w-3 text-gray-800" />
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-4xl font-extrabold text-gray-900 mb-1">
              <CountUp end={count} />
            </h3>
            <p className="text-gray-800 font-medium">Global Design <br/>Awards</p>
          </div>
        </motion.div>
      </div>
      
      <AwardsModal 
        isOpen={isAwardsModalOpen} 
        onClose={() => setIsAwardsModalOpen(false)} 
      />
      <VisualizerModal 
        isOpen={isVisualizerOpen} 
        onClose={() => setIsVisualizerOpen(false)} 
      />
    </>
  );
}
