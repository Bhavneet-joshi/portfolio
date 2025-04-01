import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

interface ProjectInquiry {
  name: string;
  email: string;
  timeAgo: string;
  avatar: string;
}

export function StatsPage() {
  const { stats } = PORTFOLIO_DATA;
  
  // Sample project inquiries
  const projectInquiries: ProjectInquiry[] = [
    {
      name: "Guy Hawkins",
      email: "jessica.hanson@example.com",
      timeAgo: "1d",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Arlene McCoy",
      email: "daryll.watson@example.com",
      timeAgo: "1d",
      avatar: "https://randomuser.me/api/portraits/women/39.jpg"
    },
    {
      name: "Wade Warren",
      email: "bill.sander@example.com",
      timeAgo: "1d",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
      name: "Floyd Miles",
      email: "tara.cruz@example.com",
      timeAgo: "6d",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg"
    }
  ];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-[calc(100vh-65px)] p-6"
    >
      <div className="bg-[#D1F0A6] rounded-3xl p-6 text-gray-900 mb-6">
        <div className="flex justify-between items-center mb-1">
          <div className="font-medium">March, 2023</div>
          <ChevronDown className="h-5 w-5" />
        </div>
        
        <div className="text-4xl font-bold mb-4">{stats.monthlyVisits.toLocaleString()}</div>
        
        <div className="h-20 w-full relative mb-2">
          <svg viewBox="0 0 400 100" width="100%" height="100%" preserveAspectRatio="none">
            <path
              d="M0,50 C50,20 100,80 150,50 C200,20 250,60 300,40 C350,20 400,50 400,50"
              fill="none"
              stroke="#9ACD32"
              strokeWidth="3"
            />
            {/* Dots on the line */}
            <circle cx="150" cy="50" r="4" fill="#9ACD32" />
            <circle cx="300" cy="40" r="4" fill="#9ACD32" />
            <circle cx="400" cy="50" r="6" fill="white" stroke="#9ACD32" strokeWidth="2" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mb-4">Project Inquiries</h2>
      
      <div className="space-y-4">
        {projectInquiries.map((inquiry, index) => (
          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <img src={inquiry.avatar} alt={inquiry.name} className="w-10 h-10 rounded-full mr-3" />
              <div>
                <div className="font-medium">{inquiry.name}</div>
                <div className="text-gray-500 text-sm">{inquiry.email}</div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">{inquiry.timeAgo}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}