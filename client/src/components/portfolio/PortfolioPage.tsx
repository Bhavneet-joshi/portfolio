import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { StatsCard } from "./StatsCard";
import { ClientsCard } from "./ClientsCard";
import { AwardsCard } from "./AwardsCard";

export function PortfolioPage() {
  const { stats } = PORTFOLIO_DATA;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-[calc(100vh-65px)] p-6"
    >
      <div className="mb-6">
        <FeaturedProjectCard />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatsCard 
          count={stats.projects} 
          label="Projects" 
          color="secondary" 
        />
        <StatsCard 
          count={stats.awards} 
          label="Awards" 
          color="primary" 
        />
      </div>
      
      <div className="mb-6">
        <ClientsCard />
      </div>
      
      <div className="mb-6">
        <AwardsCard count={stats.globalAwards} />
      </div>
    </motion.div>
  );
}