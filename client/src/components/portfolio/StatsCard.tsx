import { motion } from "framer-motion";
import { Maximize } from "lucide-react";
import { CountUp } from "./CountUp";

interface StatsCardProps {
  count: number;
  label: string;
  color?: "primary" | "secondary";
}

export function StatsCard({ count, label, color = "secondary" }: StatsCardProps) {
  const bgColor = color === "primary" 
    ? "bg-primary text-white" 
    : "bg-[#B8E0D2] text-dark";
  
  const textColor = color === "primary" 
    ? "text-white/70" 
    : "text-dark/70";

  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`${bgColor} rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end">
          <div className="bg-white/10 backdrop-blur-md rounded-md p-1">
            <Maximize className="h-5 w-5 text-dark/60" />
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="text-4xl font-bold">
            <CountUp end={count} />
          </h3>
          <p className={textColor}>{label}</p>
        </div>
      </div>
    </motion.div>
  );
}
