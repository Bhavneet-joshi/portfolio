import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { CountUp } from "./CountUp";

interface StatsCardProps {
  count: number;
  label: string;
  color?: "primary" | "secondary";
  onClick?: () => void;
}

export function StatsCard({ count, label, color = "secondary", onClick }: StatsCardProps) {
  const bgColor = color === "primary" 
    ? "bg-[#BD9ADB] text-white" 
    : "bg-[#B8E0D2] text-gray-800";

  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`${bgColor} rounded-3xl relative transition-all duration-300 hover:shadow-lg group ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
          <Maximize2 className="h-3 w-3" />
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-1">
          <h3 className="text-4xl font-bold">
            <CountUp end={count} />
          </h3>
        </div>
        <p className="text-sm">{label}</p>
      </div>
    </motion.div>
  );
}
