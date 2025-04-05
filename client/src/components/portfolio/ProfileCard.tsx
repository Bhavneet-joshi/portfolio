import { motion } from "framer-motion";
import { Mail, Info, Phone, Linkedin } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";

interface ProfileCardProps {
  name: string;
  email: string;
  status: string;
}

export function ProfileCard({ name, email, status }: ProfileCardProps) {
  // Split the name into parts for styling
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");
  const phone = PORTFOLIO_DATA.phone || "";
  const linkedinUrl = "https://www.linkedin.com/in/bhavneet-joshi-862557203/";
  
  return (
    <motion.div 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-primary rounded-[28px] p-6 text-white relative overflow-hidden h-full transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center">
            <Info className="h-5 w-5 mr-2 text-white/80" />
            <span className="font-medium">About Me</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-br from-pink-300 to-purple-300 rounded-full w-32 h-32 flex-shrink-0 flex items-center justify-center p-1 mb-6">
            <div className="bg-purple-400 rounded-full w-full h-full overflow-hidden border-2 border-white/50">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full scale-75 text-white/90" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-white/80 mb-1">I'm,</p>
            <h1 className="text-5xl font-bold">{firstName}</h1>
            <h1 className="text-5xl font-bold mb-4">{lastName}</h1>
            
            <div className="mt-4 space-y-2">
              <a href={`mailto:${email}`} className="text-sm text-white/80 flex items-center justify-center hover:text-white">
                <span>{email}</span>
                <Mail className="h-4 w-4 ml-2" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 flex items-center justify-center hover:text-white">
                <span>LinkedIn Profile</span>
                <Linkedin className="h-4 w-4 ml-2" />
              </a>
              {phone && (
                <a href={`tel:${phone}`} className="text-sm text-white/80 flex items-center justify-center hover:text-white">
                  <span>{phone}</span>
                  <Phone className="h-4 w-4 ml-2" />
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <div className="inline-flex items-center bg-black/20 rounded-full py-1 px-3 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
            <span>{status}</span>
          </div>
          
          <div className="w-16 h-16 relative">
            <div className="w-full h-full rounded-full border-2 border-dashed border-white/40 animate-spin-slow flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xs font-bold text-white">2024</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
