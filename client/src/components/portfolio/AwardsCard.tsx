import { motion } from "framer-motion";
import { Maximize } from "lucide-react";
import { CountUp } from "./CountUp";

interface AwardsCardProps {
  count: number;
}

export function AwardsCard({ count }: AwardsCardProps) {
  return (
    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-dark rounded-3xl p-6 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-md p-1">
              <Maximize className="h-5 w-5 text-white/60" />
            </div>
          </div>
          <div className="my-auto text-center py-8">
            <div className="rounded-full bg-gradient-to-br from-blue-300 to-pink-300 w-24 h-24 mx-auto flex items-center justify-center">
              <div className="rounded-full bg-gradient-to-tl from-blue-400 to-pink-400 w-16 h-16"></div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="bg-[#FFAA5A] rounded-3xl p-6 text-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
            <p className="text-dark/70">Global Design <br/>Awards</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
