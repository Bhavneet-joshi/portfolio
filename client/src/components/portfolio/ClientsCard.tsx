import { motion } from "framer-motion";
import { Maximize } from "lucide-react";
import { useState } from "react";

interface ClientsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const clientsList = [
  { name: "Apple", logo: "🍎" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Amazon", logo: "📦" },
  { name: "Google", logo: "🔍" },
  { name: "Netflix", logo: "🎬" }
];

function ClientsModal({ isOpen, onClose }: ClientsModalProps) {
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
          {clientsList.map((client) => (
            <div key={client.name} className="flex items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="text-2xl mr-4">{client.logo}</span>
              <span className="text-white text-lg">{client.name}</span>
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
        className="bg-gray-800 rounded-3xl p-6 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        onClick={openModal}
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
      
      <ClientsModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
