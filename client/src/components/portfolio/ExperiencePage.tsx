import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/experience";
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";
import { PageTransition, StaggerChildren } from "@/components/ui/loading-animation";

interface ExperiencePageProps {
  onBack?: () => void;
}

export function ExperiencePage({ onBack }: ExperiencePageProps = {}) {
  return (
    <PageTransition>
      <div className="bg-background min-h-[calc(100vh-65px)] p-6">
        {/* Header with back button */}
        {onBack && (
          <div className="mb-6">
            <motion.button 
              onClick={onBack} 
              className="flex items-center text-foreground/70 hover:text-primary transition-colors"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Portfolio</span>
            </motion.button>
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="mb-8"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"  
          >
            <h1 className="text-3xl font-bold mb-4 text-foreground">Professional Experience</h1>
            <p className="text-foreground/70">
              A chronological history of my professional career, showcasing my growth as a developer and the impact I've made at various organizations.
            </p>
          </motion.div>
          
          <StaggerChildren className="space-y-10" staggerDelay={0.2}>
            {EXPERIENCES.map((experience, index) => (
              <motion.div 
                key={experience.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
                variants={fadeUpVariants}
                custom={index}
              >
                <div className="grid md:grid-cols-5 gap-6 p-6">
                  {/* Company Logo */}
                  <div className="md:col-span-1 flex justify-center md:justify-start items-start">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      {experience.logo ? (
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-2xl font-bold text-primary">
                          {experience.company.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="md:col-span-4">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-1">{experience.position}</h2>
                        <h3 className="text-lg font-medium text-primary mb-2">{experience.company}</h3>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{experience.startDate} — {experience.endDate}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-foreground/80">{experience.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="px-2 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </PageTransition>
  );
}