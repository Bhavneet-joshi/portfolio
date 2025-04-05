import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  User, 
  Briefcase, 
  Github, 
  Code2, 
  Award,
  Folder
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

interface SidebarProps {
  className?: string;
  onNavigate?: (page: string) => void;
  currentPage?: string;
  isMobile?: boolean;
}

export function Sidebar({ className, onNavigate, currentPage = "about", isMobile = false }: SidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About Me", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "github", label: "GitHub Stats", icon: Github },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "certificates", label: "Certificates", icon: Award }
  ];
  
  // Mobile header
  if (isMobile) {
    return (
      <div className={cn("w-full bg-background flex justify-between items-center p-4 border-b border-border fixed top-0 left-0 right-0 z-50", className)}>
        <div className="text-xl font-bold text-foreground">Portfolio</div>
        
        <div className="flex items-center space-x-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <button 
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)} 
            className="p-1 rounded-md hover:bg-muted"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        {menuOpen && (
          <motion.div 
            ref={menuRef}
            className="absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border p-4 z-50 max-h-[70vh] overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center text-left py-2 ${
                      currentPage === item.id ? "text-primary font-medium" : "text-foreground/70"
                    }`}
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
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
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button 
                key={item.id}
                onClick={() => onNavigate && onNavigate(item.id)}
                className="group relative flex items-center justify-center w-12 h-12 rounded-lg hover:bg-muted transition-colors"
                aria-label={item.label}
              >
                <Icon className="h-6 w-6 text-foreground/70 group-hover:text-primary transition-colors" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-background text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
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
