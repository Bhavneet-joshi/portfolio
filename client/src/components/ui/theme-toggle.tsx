import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  variant?: "icon" | "button";
}

export function ThemeToggle({ className, variant = "icon" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  
  const iconVariants = {
    initial: { scale: 0.6, rotate: 0, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0.6, rotate: 45, opacity: 0 },
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
        {theme === "dark" ? (
          <>
            <motion.span
              key="dark-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-4 w-4" />
            </motion.span>
            <span>Dark</span>
          </>
        ) : (
          <>
            <motion.span
              key="light-icon"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconVariants}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-4 w-4" />
            </motion.span>
            <span>Light</span>
          </>
        )}
      </Button>
    );
  }
  
  return (
    <motion.div 
      whileHover={{ rotate: 45 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className={cn(
          "rounded-full",
          theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-200",
          className
        )}
      >
        <span className="sr-only">Toggle theme</span>
        {theme === "dark" ? (
          <motion.span
            key="dark-icon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="light-icon"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={iconVariants}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-5 w-5" />
          </motion.span>
        )}
      </Button>
    </motion.div>
  );
}