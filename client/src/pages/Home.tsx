import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { StatsCard } from "@/components/portfolio/StatsCard";
import { ClientsCard } from "@/components/portfolio/ClientsCard";
import { AwardsCard } from "@/components/portfolio/AwardsCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mobile page components
import { AboutPage } from "@/components/portfolio/AboutPage";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { StatsPage } from "@/components/portfolio/StatsPage";

export default function Home() {
  const { name, email, status, stats } = PORTFOLIO_DATA;
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState("portfolio");
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };
  
  // Mobile view with page switching
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Sidebar isMobile={true} currentPage={currentPage} onNavigate={handleNavigate} />
        
        {currentPage === "about" && <AboutPage />}
        {currentPage === "portfolio" && <PortfolioPage />}
        {currentPage === "stats" && <StatsPage />}
        {currentPage === "clients" && (
          <div className="bg-white min-h-[calc(100vh-65px)] p-6">
            <ClientsCard />
          </div>
        )}
        
        <div className="text-center text-gray-500 text-xs p-4 border-t">
          © {new Date().getFullYear()} {name} • Portfolio Template
        </div>
      </div>
    );
  }
  
  // Desktop view
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <Sidebar className="hidden md:block" />
            
            <div className="flex-grow p-5 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Profile Card - Takes 5 columns on desktop */}
                <div className="md:col-span-5">
                  <ProfileCard 
                    name={name} 
                    email={email} 
                    status={status} 
                  />
                </div>
                
                {/* Right side content - Takes 7 columns on desktop */}
                <div className="md:col-span-7 flex flex-col gap-5">
                  <div className="mb-1">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Portfolio</h2>
                  </div>
                  
                  {/* Featured Project - Full width */}
                  <FeaturedProjectCard />
                  
                  {/* Stats row - Two cards side by side */}
                  <div className="grid grid-cols-2 gap-5">
                    <StatsCard 
                      count={stats.projects} 
                      label="GitHub Projects" 
                      color="secondary" 
                    />
                    <StatsCard 
                      count={stats.awards} 
                      label="Awards" 
                      color="primary" 
                    />
                  </div>
                </div>
                
                {/* Bottom row - Clients and Awards */}
                <div className="md:col-span-5">
                  <ClientsCard />
                </div>
                <div className="md:col-span-7">
                  <AwardsCard count={stats.globalAwards} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} {name} • Portfolio Template • Interactive Demo
        </div>
      </div>
    </div>
  );
}
