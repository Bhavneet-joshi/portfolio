import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { ProfileCard } from "@/components/portfolio/ProfileCard";
import { FeaturedProjectCard } from "@/components/portfolio/FeaturedProjectCard";
import { StatsCard } from "@/components/portfolio/StatsCard";
import { CertificatesCard } from "@/components/portfolio/CertificatesCard";
import { useIsMobile } from "@/hooks/use-mobile";

// Mobile page components
import { AboutPage } from "@/components/portfolio/AboutPage";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { GitHubPage } from "@/components/portfolio/GitHubPage";
import { CertificatesPage } from "@/components/portfolio/CertificatesPage";
import { ExperiencePage } from "@/components/portfolio/ExperiencePage";
import { SkillsPage } from "@/components/portfolio/SkillsPage";
import { ProjectsPage } from "@/components/portfolio/ProjectsPage";

export default function Home() {
  const { name, email, status } = PORTFOLIO_DATA;
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState("about");
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating on mobile
    if (isMobile) {
      window.scrollTo(0, 0);
    }
  };
  
  // Mobile view with page switching
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar isMobile={true} currentPage={currentPage} onNavigate={handleNavigate} />
        
        <div className="pt-16"> {/* Add padding to account for fixed header */}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "portfolio" && <PortfolioPage 
            statsOverride={{
              projects: 11,
              awards: 15,
              experience: 1
            }}
          />}
          {currentPage === "experience" && <ExperiencePage onBack={() => handleNavigate("about")} />}
          {currentPage === "github" && <GitHubPage onBack={() => handleNavigate("about")} />}
          {currentPage === "projects" && <ProjectsPage onBack={() => handleNavigate("about")} />}
          {currentPage === "skills" && <SkillsPage onBack={() => handleNavigate("about")} />}
          {currentPage === "certificates" && (
            <div className="bg-background min-h-[calc(100vh-65px)] p-6">
              <CertificatesPage onBack={() => handleNavigate("about")} />
            </div>
          )}
        </div>
        
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
            {currentPage === "projects" && <ProjectsPage onBack={() => handleNavigate("portfolio")} />}
            {currentPage === "skills" && <SkillsPage onBack={() => handleNavigate("portfolio")} />}
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
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row">
        <Sidebar className="hidden md:block" onNavigate={handleNavigate} currentPage={currentPage} />
        
        <div className="flex-grow p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left column - Profile */}
              <div className="md:col-span-5">
                <ProfileCard 
                  name={name} 
                  email={email} 
                  status={status} 
                />
              </div>
              
              {/* Right column - Content */}
              <div className="md:col-span-7 flex flex-col gap-5">
                <div className="mb-1">
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">Portfolio</h2>
                </div>
                
                {/* Featured Project - Full width */}
                <FeaturedProjectCard />
                
                {/* Stats row - Two cards side by side */}
                <div className="grid grid-cols-2 gap-5">
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
                </div>
              </div>
              
              {/* Bottom row - Certificates only */}
              <div className="md:col-span-12">
                <CertificatesCard 
                  count={12} 
                  onClick={() => handleNavigate("certificates")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-foreground/50 text-sm p-4 border-t border-border">
        © {new Date().getFullYear()} {name} • Portfolio
      </div>
    </div>
  );
}
