import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "button";
}

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  const iconVariants = {
    initial: { scale: 0.6, rotate: 0, opacity: 0, y: 10 },
    animate: { scale: 1, rotate: 0, opacity: 1, y: 0 },
    exit: { scale: 0.6, rotate: 180, opacity: 0, y: -10 },
  };

  // Background circle animation
  const circleVariants = {
    dark: { 
      backgroundColor: "rgba(30, 41, 59, 0.8)", // slate-800 with transparency
      scale: 1
    },
    light: { 
      backgroundColor: "rgba(241, 245, 249, 0.8)", // slate-100 with transparency
      scale: 1
    }
  };

  // Container animation for the entire toggle
  const containerVariants = {
    hover: { 
      scale: 1.1,
      rotate: 15,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.9,
      rotate: -15,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  };

  if (variant === "button") {
    return (
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className={cn(
          "gap-2 transition-colors", 
          theme === "dark" ? "bg-slate-800 text-slate-200" : "bg-white text-slate-800",
          className
        )}
      >
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.span
              key="dark-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              <Moon className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="light-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
            >
              <Sun className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>
        <span>{theme === "dark" ? "Dark" : "Light"}</span>
      </Button>
    );
  }
  
  return (
    <motion.div 
      className="relative"
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        animate={theme === "dark" ? "dark" : "light"}
        variants={circleVariants}
        transition={{ duration: 0.5 }}
      />

      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={cn(
          "rounded-full relative z-10 backdrop-blur-sm",
          theme === "dark" ? "text-yellow-200" : "text-amber-500",
          className
        )}
      >
        <span className="sr-only">Toggle theme</span>
        <AnimatePresence mode="wait">
          {theme === "dark" ? (
            <motion.div
              key="dark-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
              }}
              className="w-5 h-5 flex items-center justify-center"
            >
              <Moon className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="light-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 300, 
                damping: 15 
              }}
              className="w-5 h-5 flex items-center justify-center"
            >
              <Sun className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}