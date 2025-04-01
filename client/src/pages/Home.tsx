import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { EXPERIENCES } from "@/lib/experience";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { StatsCard } from "@/components/portfolio/StatsCard";
import { ClientsCard } from "@/components/portfolio/ClientsCard";
import { AwardsCard } from "@/components/portfolio/AwardsCard";
import { CertificatesCard } from "@/components/portfolio/CertificatesCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mobile page components
import { AboutPage } from "@/components/portfolio/AboutPage";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { StatsPage } from "@/components/portfolio/StatsPage";
import { GitHubPage } from "@/components/portfolio/GitHubPage";
import { CertificatesPage } from "@/components/portfolio/CertificatesPage";
import { ExperiencePage } from "@/components/portfolio/ExperiencePage";

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
      <div className="min-h-screen bg-background">
        <Sidebar isMobile={true} currentPage={currentPage} onNavigate={handleNavigate} />
        
        {currentPage === "about" && <AboutPage />}
        {currentPage === "portfolio" && <PortfolioPage />}
        {currentPage === "experience" && <ExperiencePage onBack={() => handleNavigate("portfolio")} />}
        {currentPage === "github" && <GitHubPage onBack={() => handleNavigate("portfolio")} />}
        {currentPage === "stats" && <StatsPage />}
        {currentPage === "clients" && (
          <div className="bg-background min-h-[calc(100vh-65px)] p-6">
            <ClientsCard />
          </div>
        )}
        {currentPage === "certificates" && (
          <div className="bg-background min-h-[calc(100vh-65px)] p-6">
            <CertificatesPage onBack={() => handleNavigate("portfolio")} />
          </div>
        )}
        
        <div className="text-center text-foreground/50 text-xs p-4 border-t border-border">
          © {new Date().getFullYear()} {name} • Portfolio
        </div>
      </div>
    );
  }
  
  // Desktop view - Main view
  if (currentPage !== "portfolio" && currentPage !== "about") {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex flex-col md:flex-row">
          <Sidebar className="hidden md:block" onNavigate={handleNavigate} currentPage={currentPage} />
          
          <div className="flex-grow">
            {currentPage === "experience" && <ExperiencePage onBack={() => handleNavigate("portfolio")} />}
            {currentPage === "github" && <GitHubPage onBack={() => handleNavigate("portfolio")} />}
            {currentPage === "stats" && <StatsPage />}
            {currentPage === "clients" && (
              <div className="bg-background min-h-[calc(100vh-65px)] p-6">
                <ClientsCard />
              </div>
            )}
            {currentPage === "certificates" && <CertificatesPage onBack={() => handleNavigate("portfolio")} />}
          </div>
        </div>
        
        <div className="text-center text-foreground/50 text-sm p-4 border-t border-border">
          © {new Date().getFullYear()} {name} • Portfolio
        </div>
      </div>
    );
  }
  
  // Desktop view - Portfolio view
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-card rounded-[32px] shadow-xl overflow-hidden border border-border">
          <div className="flex flex-col md:flex-row">
            <Sidebar className="hidden md:block" onNavigate={handleNavigate} />
            
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
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">Portfolio</h2>
                  </div>
                  
                  {/* Featured Project - Full width */}
                  <FeaturedProjectCard />
                  
                  {/* Stats row - Three cards side by side */}
                  <div className="grid grid-cols-3 gap-5">
                    <StatsCard 
                      count={11} 
                      label="GitHub Projects" 
                      color="secondary" 
                      onClick={() => handleNavigate("github")}
                    />
                    <StatsCard 
                      count={15} 
                      label="Contributions" 
                      color="primary" 
                      onClick={() => handleNavigate("github")}
                    />
                    <StatsCard 
                      count={3} 
                      label="Experience" 
                      color="secondary" 
                      onClick={() => handleNavigate("experience")}
                    />
                  </div>
                </div>
                
                {/* Bottom row - Experience and Certificates */}
                <div className="md:col-span-5">
                  <StatsCard 
                    count={3} 
                    label="Years Experience" 
                    color="secondary"
                    onClick={() => handleNavigate("experience")}
                  />
                </div>
                <div className="md:col-span-7">
                  <CertificatesCard 
                    count={12} 
                    onClick={() => handleNavigate("certificates")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-foreground/50 text-sm mt-6">
          © {new Date().getFullYear()} {name} • Portfolio
        </div>
      </div>
    </div>
  );
}
