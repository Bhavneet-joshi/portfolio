import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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
      className="bg-white min-h-[calc(100vh-65px)]"
    >
      {/* Header with back button if onBack is provided */}
      {onBack && (
        <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-6 py-4">
          <button onClick={onBack} className="flex items-center text-gray-700 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold mb-2">GitHub Activity</h1>
        <p className="text-gray-600 mb-8">
          Real-time statistics from my GitHub profile showing repositories, contributions, and development activity.
        </p>
        
        <GitHubStats username="Bhavneet-joshi" />
      </div>
    </motion.div>
  );
}