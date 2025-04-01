import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowLeft, Menu } from "lucide-react";

interface SidebarProps {
  className?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
  isMobile?: boolean;
}

export function Sidebar({ className, onNavigate, currentPage = "portfolio", isMobile = false }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMenuOpen(false);
  };
  
  // Mobile header
  if (isMobile) {
    return (
      <div className={cn("w-full bg-white flex justify-between items-center p-4 border-b border-gray-200 sticky top-0 z-10", className)}>
        {currentPage !== "portfolio" ? (
          <button 
            onClick={() => onNavigate?.("portfolio")}
            className="flex items-center text-gray-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Portfolio</span>
          </button>
        ) : (
          <div className="text-xl font-bold">Portfolio</div>
        )}
        
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="p-1 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 z-20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick("about")}
                className={`text-left py-2 ${currentPage === "about" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                About Me
              </button>
              <button 
                onClick={() => handleNavClick("portfolio")}
                className={`text-left py-2 ${currentPage === "portfolio" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick("github")}
                className={`text-left py-2 ${currentPage === "github" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                GitHub Stats
              </button>
              <button 
                onClick={() => handleNavClick("stats")}
                className={`text-left py-2 ${currentPage === "stats" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Stats
              </button>
              <button 
                onClick={() => handleNavClick("clients")}
                className={`text-left py-2 ${currentPage === "clients" ? "text-primary font-medium" : "text-gray-600"}`}
              >
                Clients
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Desktop sidebar
  return (
    <div className={cn("hidden md:flex w-20 bg-white flex-col justify-around items-center p-4 border-r border-gray-200", className)}>
      <div className="flex h-full flex-col justify-between items-center w-full">
        <a 
          href="#about" 
          className="nav-item rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-8"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          About
        </a>
        <a 
          href="#portfolio" 
          className="nav-item rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-8"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Portfolio
        </a>
        <a 
          href="#github" 
          className="nav-item rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-8"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          GitHub
        </a>
        <a 
          href="#stats" 
          className="nav-item rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide mb-8"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Stats
        </a>
        <a 
          href="#clients" 
          className="nav-item rotate-180 text-gray-500 hover:text-primary transition-all font-medium tracking-wide"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Clients
        </a>
      </div>
    </div>
  );
}
