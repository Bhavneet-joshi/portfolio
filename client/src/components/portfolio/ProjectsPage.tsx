import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS, Project } from "@/lib/projects";
import { ProjectDetail } from "./ProjectDetail";

type Category = "all" | "web" | "mobile" | "design" | "other";

interface ProjectsPageProps {
  onBack?: () => void;
}

export function ProjectsPage({ onBack }: ProjectsPageProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  const filteredProjects = 
    selectedCategory === "all" 
      ? PROJECTS 
      : PROJECTS.filter(project => project.category === selectedCategory);
  
  if (selectedProjectId) {
    return (
      <ProjectDetail 
        id={selectedProjectId} 
        onBack={() => setSelectedProjectId(null)} 
      />
    );
  }
  
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
          <button onClick={onBack} className="flex items-center text-gray-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      )}
        
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        
        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-6 px-6">
          <div className="flex space-x-2">
            {["all", "web", "mobile", "design", "other"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as Category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProjectId(project.id)}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}