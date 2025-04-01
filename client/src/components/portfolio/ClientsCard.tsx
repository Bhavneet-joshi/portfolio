import { motion } from "framer-motion";
import { Maximize } from "lucide-react";

export function ClientsCard() {
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="bg-gray-800 rounded-3xl p-6 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end">
          <div className="bg-white/10 backdrop-blur-md rounded-md p-1">
            <Maximize className="h-5 w-5 text-white/60" />
          </div>
        </div>
        <div className="my-auto text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-white/90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </div>
        <div className="mt-auto text-center">
          <p className="text-white/70">Clients</p>
        </div>
      </div>
    </motion.div>
  );
}
