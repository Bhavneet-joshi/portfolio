import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { GitHubStats } from "./GitHubStats";

interface GitHubPageProps {
  onBack?: () => void;
}

export function GitHubPage({ onBack }: GitHubPageProps = {}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background min-h-[calc(100vh-65px)]"
    >
      {/* Header with back button if onBack is provided */}
      {onBack && (
        <div className="sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-border px-6 py-4">
          <button 
            onClick={onBack} 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      )}
      
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex items-center gap-3 mb-6">
          <Github className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">GitHub Activity</h1>
        </div>
        
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Explore my GitHub profile to see my repositories, contributions, and development activity. 
          I'm passionate about open source and building tools that make a difference.
        </p>
        
        <GitHubStats username="Bhavneet-joshi" />
      </div>
    </motion.div>
  );
}