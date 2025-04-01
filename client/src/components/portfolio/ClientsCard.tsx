import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { SiApple } from "react-icons/si";

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ClientsModal({ isOpen, onClose }: ClientsModalProps) {
  const { clients } = PORTFOLIO_DATA;
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="relative w-full max-w-2xl bg-gray-900 rounded-xl p-8">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-6">Notable Clients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="text-2xl mr-4">{client.logo === "apple" ? "🍎" : client.logo === "google" ? "🔍" : client.logo === "microsoft" ? "🪟" : "📦"}</span>
              <div>
                <span className="text-white text-lg block">{client.name}</span>
                <span className="text-white/60 text-sm">{client.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientsCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <motion.div 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-gray-800 rounded-3xl overflow-hidden relative cursor-pointer group"
        onClick={openModal}
      >
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
            <Maximize2 className="h-3 w-3 text-white" />
          </div>
        </div>
        
        <div className="h-full flex flex-col justify-center items-center p-6">
          <div className="flex-grow flex items-center justify-center p-4">
            <SiApple className="text-white h-10 w-10" />
          </div>
          
          <p className="text-xs text-white/70 mt-auto">Clients</p>
        </div>
      </motion.div>
      
      <ClientsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
