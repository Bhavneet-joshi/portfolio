import { motion } from "framer-motion";
import { Award, Maximize2, Code, GitCommit, GitPullRequest, MessageSquare } from "lucide-react";
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
  if (!isOpen) return null;
  
  // Example GitHub contribution types for the modal
  const contributionTypes = [
    { type: 'push', icon: GitCommit, title: 'Code Pushed', desc: 'Updated portfolio website with new features', repo: 'portfolio-website', time: '2 days ago' },
    { type: 'pr', icon: GitPullRequest, title: 'Pull Request Created', desc: 'Added responsive layout improvements', repo: 'interactive-ui', time: '3 days ago' },
    { type: 'code', icon: Code, title: 'Feature Added', desc: 'Implemented dark mode toggle with persistence', repo: 'theme-switcher', time: '5 days ago' },
    { type: 'comment', icon: MessageSquare, title: 'Code Review', desc: 'Provided feedback on UI component library', repo: 'component-lib', time: '1 week ago' },
    { type: 'push', icon: GitCommit, title: 'Bug Fix', desc: 'Fixed mobile navigation issues on small screens', repo: 'responsive-nav', time: '1 week ago' },
    { type: 'pr', icon: GitPullRequest, title: 'Pull Request Merged', desc: 'Enhanced data visualization charts', repo: 'dashboard-ui', time: '2 weeks ago' },
    { type: 'code', icon: Code, title: 'Performance Optimization', desc: 'Improved loading times by 40%', repo: 'performance-boost', time: '2 weeks ago' },
    { type: 'push', icon: GitCommit, title: 'Documentation Update', desc: 'Added comprehensive API documentation', repo: 'api-docs', time: '3 weeks ago' },
    { type: 'comment', icon: MessageSquare, title: 'Issue Discussion', desc: 'Participated in accessibility enhancement planning', repo: 'a11y-improvements', time: '3 weeks ago' },
    { type: 'code', icon: Code, title: 'New Component', desc: 'Created reusable form validation component', repo: 'form-validator', time: '1 month ago' },
  ];
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-8">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-purple-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
          <GitCommit className="mr-2" /> GitHub Contributions
        </h2>
        
        <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
          {contributionTypes.map((contrib, index) => {
            const IconComponent = contrib.icon;
            return (
              <div key={index} className="bg-white/20 backdrop-blur-md rounded-lg p-4 hover:bg-white/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-white/30 rounded-full p-2 mt-1">
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg">{contrib.title}</h3>
                    <p className="text-white/80 text-sm">{contrib.desc}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/70 text-sm">{contrib.repo}</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs">{contrib.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
          className="bg-purple-500 rounded-[20px] overflow-hidden relative cursor-pointer group flex-1"
          onClick={() => setIsAwardsModalOpen(true)}
        >
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
              <Maximize2 className="h-3 w-3 text-gray-800" />
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-4xl font-extrabold text-white mb-1">
              <CountUp end={count} />
            </h3>
            <p className="text-white/90 font-medium">GitHub <br/>Contributions</p>
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
