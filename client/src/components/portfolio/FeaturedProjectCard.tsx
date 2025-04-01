import { motion } from "framer-motion";
import { Maximize, Play } from "lucide-react";

export function FeaturedProjectCard() {
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-3xl overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
    >
      <div className="relative">
        <div className="w-full h-60 bg-gradient-to-r from-rose-300 to-rose-200 flex items-center justify-center">
          <svg viewBox="0 0 1600 900" className="w-full h-full object-cover opacity-80">
            <rect width="1600" height="900" fill="#7B68EE" />
            <polygon fill="#663399" points="957 450 539 900 1396 900" />
            <polygon fill="#AA5BC3" points="957 450 872.9 900 1396 900" />
            <polygon fill="#8A2BE2" points="-60 900 398 662 816 900" />
            <polygon fill="#9370DB" points="337 900 398 662 816 900" />
            <polygon fill="#7B68EE" points="1203 546 1552 900 876 900" />
            <polygon fill="#6A5ACD" points="1203 546 1552 900 1162 900" />
            <polygon fill="#483D8B" points="641 695 886 900 367 900" />
            <polygon fill="#5D478B" points="587 900 641 695 886 900" />
            <polygon fill="#9932CC" points="1710 900 1401 632 1096 900" />
            <polygon fill="#8B008B" points="1710 900 1401 632 1365 900" />
            <polygon fill="#8A2BE2" points="1210 900 971 687 725 900" />
            <polygon fill="#9400D3" points="943 900 1210 900 971 687" />
          </svg>
          
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-rose-500 -rotate-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
              <path d="M12.146 8.354l-5 5a.5.5 0 11-.708-.708l5-5a.5.5 0 11.708.708z" />
              <path d="M9.146 9.354l-5 5a.5.5 0 11-.708-.708l5-5a.5.5 0 11.708.708z" />
              <path d="M15.146 7.354l-5 5a.5.5 0 11-.708-.708l5-5a.5.5 0 11.708.708z" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/10 backdrop-blur-md rounded-md p-1">
            <Maximize className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
