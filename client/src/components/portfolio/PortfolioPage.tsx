import { motion } from "framer-motion";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { StatsCard } from "./StatsCard";
import { ClientsCard } from "./ClientsCard";
import { AwardsCard } from "./AwardsCard";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectsPage } from "./ProjectsPage";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";
import { StaggerChildren, PageTransition } from "@/components/ui/loading-animation";

export function PortfolioPage() {
  const { stats } = PORTFOLIO_DATA;
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  
  // If a project is selected, show the project detail view
  if (selectedProjectId) {
    if (selectedProjectId === "projects") {
      return (
        <ProjectsPage onBack={() => setSelectedProjectId(null)} />
      );
    }
    
    return (
      <ProjectDetail 
        id={selectedProjectId}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }
  
  // Otherwise show the portfolio overview
  return (
    <PageTransition>
      <div className="bg-background min-h-[calc(100vh-65px)] p-6">
        <StaggerChildren staggerDelay={0.15}>
          <motion.div className="mb-6" variants={fadeUpVariants}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-foreground">Featured Project</h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedProjectId("projects")}
                className="text-primary"
              >
                View All Projects
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <FeaturedProjectCard onProjectClick={setSelectedProjectId} />
          </motion.div>
          
          <motion.div variants={fadeUpVariants} custom={1}>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatsCard 
                count={stats.projects} 
                label="Projects" 
                color="secondary" 
                onClick={() => setSelectedProjectId("projects")}
              />
              <StatsCard 
                count={stats.awards} 
                label="Awards" 
                color="primary" 
              />
            </div>
          </motion.div>
          
          <motion.div className="mb-6" variants={fadeUpVariants} custom={2}>
            <ClientsCard />
          </motion.div>
          
          <motion.div className="mb-6" variants={fadeUpVariants} custom={3}>
            <AwardsCard count={stats.globalAwards} />
          </motion.div>
        </StaggerChildren>
      </div>
    </PageTransition>
  );
}