import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Check, ExternalLink, Search, X } from "lucide-react";
import { CertificateCard } from "./CertificateCard";
import { CERTIFICATES, Certificate } from "@/lib/certificates";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CertificatesPageProps {
  onBack?: () => void;
}

interface CertificateDetailProps {
  certificate: Certificate;
  onClose: () => void;
}

function CertificateDetail({ certificate, onClose }: CertificateDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row overflow-auto">
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-50">
            <img 
              src={certificate.imageUrl} 
              alt={certificate.title} 
              className="w-full object-contain max-h-[60vh]"
            />
          </div>
          
          <div className="md:w-1/2 p-6 flex flex-col">
            <div className="mb-2 flex items-center">
              <Award className="text-primary mr-2 h-5 w-5" />
              <h2 className="text-2xl font-bold">{certificate.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {certificate.organization}
              </Badge>
              <Badge variant="outline" className="bg-gray-100 border-gray-200">
                {certificate.date}
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-6">{certificate.description}</p>
            
            {certificate.verificationUrl && (
              <a 
                href={certificate.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mt-auto"
              >
                <Button className="gap-2">
                  <Check className="h-4 w-4" />
                  <span>Verify Certificate</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CertificatesPage({ onBack }: CertificatesPageProps = {}) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCertificates = CERTIFICATES.filter(cert => 
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cert.organization.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack}
              className="h-9 w-9"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <h1 className="text-3xl font-bold tracking-tight">Certificates & Achievements</h1>
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            type="text"
            placeholder="Search certificates..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map((certificate) => (
          <CertificateCard 
            key={certificate.id} 
            certificate={certificate} 
            onClick={() => setSelectedCertificate(certificate)}
          />
        ))}
      </div>
      
      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <Award className="h-6 w-6 text-gray-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No certificates found</h3>
          <p className="mt-1 text-gray-500">Try a different search term.</p>
        </div>
      )}
      
      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <CertificateDetail 
          certificate={selectedCertificate} 
          onClose={() => setSelectedCertificate(null)} 
        />
      )}
    </div>
  );
}