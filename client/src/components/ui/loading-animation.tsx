import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { spinnerVariants } from "@/lib/animations";

interface LoadingAnimationProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary";
}

export function LoadingSpinner({ 
  className, 
  size = "md", 
  variant = "default" 
}: LoadingAnimationProps) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };
  
  const variantClasses = {
    default: "border-gray-300 border-t-gray-800",
    primary: "border-primary/30 border-t-primary",
    secondary: "border-purple-300 border-t-purple-600",
  };
  
  return (
    <motion.div
      className={cn(
        "border-4 rounded-full",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      variants={spinnerVariants}
      initial="hidden"
      animate="visible"
    />
  );
}

export function PulsingDots({ 
  className, 
  variant = "default" 
}: Omit<LoadingAnimationProps, "size">) {
  const variantClasses = {
    default: "bg-gray-600",
    primary: "bg-primary",
    secondary: "bg-purple-600",
  };
  
  const dotVariants = {
    initial: {
      y: 0,
      opacity: 0.4,
    },
    animate: (i: number) => ({
      y: [0, -10, 0],
      opacity: [0.4, 1, 0.4],
      transition: {
        y: {
          repeat: Infinity,
          duration: 0.6,
          ease: "easeInOut",
          delay: i * 0.1,
        },
        opacity: {
          repeat: Infinity,
          duration: 0.6,
          ease: "easeInOut",
          delay: i * 0.1,
        },
      },
    }),
  };
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={cn("h-2 w-2 rounded-full", variantClasses[variant])}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          custom={i}
        />
      ))}
    </div>
  );
}

export function GrowingBar({ 
  className, 
  variant = "default" 
}: Omit<LoadingAnimationProps, "size">) {
  const variantClasses = {
    default: "bg-gray-700",
    primary: "bg-primary",
    secondary: "bg-purple-600",
  };
  
  const barVariants = {
    initial: {
      width: "0%",
    },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <div className={cn("h-1 w-full bg-gray-200 rounded-full overflow-hidden", className)}>
      <motion.div
        className={cn("h-full rounded-full", variantClasses[variant])}
        variants={barVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ 
  children,
  delay = 0,
  duration = 0.5,
  className,
}: { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ 
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  className,
}: { 
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const directionValues = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directionValues[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  containerDelay = 0,
  className,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  containerDelay?: number;
  className?: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: containerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        
        return (
          <motion.div key={Math.random()} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}