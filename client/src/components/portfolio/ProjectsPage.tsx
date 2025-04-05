import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/lib/projects";
import { ProjectDetail } from "./ProjectDetail";
import { PageTransition } from "@/components/ui/loading-animation";

type Category = "all" | "web" | "mobile" | "design" | "other";

interface ProjectsPageProps {
  onBack?: () => void;
}

export function ProjectsPage({ onBack }: ProjectsPageProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // Filter projects based on selected category
  const filteredProjects = 
    selectedCategory === "all" 
      ? PROJECTS 
      : PROJECTS.filter(project => project.category === selectedCategory);
  
  // Show detailed view when a project is selected
  if (selectedProjectId) {
    return (
      <ProjectDetail 
        id={selectedProjectId} 
        onBack={() => setSelectedProjectId(null)} 
      />
    );
  }
  
  return (
    <PageTransition>
      <div className="bg-background min-h-[calc(100vh-65px)]">
        {/* Navigation back button (visible if provided) */}
        {onBack && (
          <div className="sticky top-0 bg-background z-10 border-b border-border px-6 py-4">
            <button onClick={onBack} className="flex items-center text-foreground/70 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Portfolio</span>
            </button>
          </div>
        )}
          
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Projects</h1>
          
          {/* Project category filter buttons */}
          <div className="mb-8 overflow-x-auto pb-2 -mx-6 px-6">
            <div className="flex space-x-2">
              {["all", "web", "mobile", "design", "other"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as Category)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground/80 hover:bg-muted/80"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Responsive projects grid or empty state */}
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
              <p className="text-foreground/50">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}