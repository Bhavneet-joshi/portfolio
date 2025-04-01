import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function AboutPage() {
  const { name, bio } = PORTFOLIO_DATA;
  
  // Split the name into parts for styling
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-[calc(100vh-65px)] p-6"
    >
      <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden h-[240px] flex flex-col justify-center items-center mb-6">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#5D4EBF] to-[#7766CC] opacity-50 z-0" />
        
        <div className="z-10 text-center">
          <p className="text-2xl text-white/80 mb-2">I'm,</p>
          <h1 className="text-6xl font-bold">{firstName}</h1>
          <h1 className="text-6xl font-bold mb-2">{lastName}</h1>
        </div>
        
        <div className="absolute right-6 bottom-6 w-16 h-16 z-10">
          <div className="w-full h-full rounded-full border-2 border-dashed border-white/40 animate-spin-slow flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-white font-bold">2023</span>
          </div>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      
      <div className="space-y-4">
        {bio.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}