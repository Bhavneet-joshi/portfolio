import { useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Certificate } from "@/lib/certificates";

interface CertificateCardProps {
  certificate: Certificate;
  onClick?: () => void;
}

export function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-primary/20">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm font-medium">{certificate.date}</span>
                <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg line-clamp-2 mb-1">{certificate.title}</h3>
              <p className="text-sm text-gray-500">{certificate.organization}</p>
            </div>
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Award className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}