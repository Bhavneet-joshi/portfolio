import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { CountUp } from "./CountUp";

interface CertificatesCardProps {
  count: number;
  onClick?: () => void;
}

export function CertificatesCard({ count, onClick }: CertificatesCardProps) {
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-blue-600 rounded-[20px] overflow-hidden relative cursor-pointer group flex-1"
      onClick={onClick}
    >
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
          <Maximize2 className="h-3 w-3 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-4xl font-extrabold text-white mb-1">
          <CountUp end={count} />
        </h3>
        <p className="text-white/90 font-medium">Professional <br/>Certificates</p>
      </div>
    </motion.div>
  );
}