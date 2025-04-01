import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface ProfileCardProps {
  name: string;
  email: string;
  status: string;
}

export function ProfileCard({ name, email, status }: ProfileCardProps) {
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-primary rounded-3xl p-6 text-white relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">About Me</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="bg-gradient-to-br from-[#B19CD9] to-[#F4BBFF] rounded-full w-36 h-36 flex-shrink-0 flex items-center justify-center p-1 mb-6 md:mb-0 md:mr-6">
            <div className="bg-[#B19CD9] rounded-full w-full h-full overflow-hidden border-2 border-white/50">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full scale-75 text-white/90" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-xl text-white/80">I'm,</p>
            <h1 className="text-4xl font-bold mb-1">{name}</h1>
            <div className="mt-6 inline-block">
              <a href={`mailto:${email}`} className="text-sm text-white/80 flex items-center hover:text-white">
                <span>{email}</span>
                <Mail className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="inline-flex items-center bg-black/20 rounded-full py-1 px-3 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
