import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

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
      <div className={cn("w-full bg-background flex justify-between items-center p-4 border-b border-border sticky top-0 z-10", className)}>
        {currentPage !== "portfolio" ? (
          <button 
            onClick={() => onNavigate?.("portfolio")}
            className="flex items-center text-foreground/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Portfolio</span>
          </button>
        ) : (
          <div className="text-xl font-bold text-foreground">Portfolio</div>
        )}
        
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-1 rounded-md hover:bg-muted"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        {menuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border p-4 z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick("about")}
                className={`text-left py-2 ${currentPage === "about" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                About Me
              </button>
              <button 
                onClick={() => handleNavClick("portfolio")}
                className={`text-left py-2 ${currentPage === "portfolio" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick("github")}
                className={`text-left py-2 ${currentPage === "github" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                GitHub Stats
              </button>
              <button 
                onClick={() => handleNavClick("stats")}
                className={`text-left py-2 ${currentPage === "stats" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                Stats
              </button>
              <button 
                onClick={() => handleNavClick("clients")}
                className={`text-left py-2 ${currentPage === "clients" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                Clients
              </button>
              <button 
                onClick={() => handleNavClick("certificates")}
                className={`text-left py-2 ${currentPage === "certificates" ? "text-primary font-medium" : "text-foreground/70"}`}
              >
                Certificates
              </button>
            </div>
          </motion.div>
        )}
      </div>
    );
  }
  
  // Desktop sidebar
  return (
    <div className={cn("hidden md:flex w-20 bg-background flex-col justify-around items-center p-4 border-r border-border", className)}>
      <div className="flex h-full flex-col justify-between items-center w-full">
        <div className="flex flex-col items-center space-y-8">
          <a 
            href="#about" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            About
          </a>
          <a 
            href="#portfolio" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Portfolio
          </a>
          <a 
            href="#github" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            GitHub
          </a>
          <a 
            href="#stats" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Stats
          </a>
          <a 
            href="#clients" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Clients
          </a>
          <a 
            href="#certificates" 
            className="nav-item rotate-180 text-foreground/70 hover:text-primary transition-all font-medium tracking-wide"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Certificates
          </a>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-auto pt-8"
        >
          <ThemeToggle />
        </motion.div>
      </div>
    </div>
  );
}
