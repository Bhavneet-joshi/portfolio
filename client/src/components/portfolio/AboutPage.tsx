import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/experience";
import { PORTFOLIO_DATA } from "@/lib/constants";
import { Briefcase, Code, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { fadeUpVariants } from "@/lib/animations";
import { PageTransition, StaggerChildren } from "@/components/ui/loading-animation";
import { ProjectShowcase } from "./ProjectShowcase";

export function AboutPage() {
  const { name, bio, education, skills } = PORTFOLIO_DATA;
  
  // Split the name into parts for styling
  const nameParts = name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const featuredProjects = [
    {
      title: "Construction Website",
      url: "https://construction-website.vercel.app",
      githubUrl: "https://github.com/yourusername/construction-website",
      description: "Developed a responsive website for a construction company. Used React.js, TypeScript, and Bootstrap."
    },
    {
      title: "Picture Pass",
      url: "https://picture-pass.vercel.app/",
      githubUrl: "https://github.com/yourusername/picture-pass",
      description: "Developed a dynamic image display application using React.js, Tailwind CSS, and Material UI. Integrated external APIs for real-time images. Created a responsive and visually appealing UI."
    },
    {
      title: "CommApp",
      url: "https://communion-app-sigma.vercel.app",
      githubUrl: "https://github.com/yourusername/commapp",
      description: "Built a real-time communication platform using JavaScript, Node.js, and Express.js. Implemented authentication and instant messaging."
    },
    {
      title: "Clock App",
      url: "https://clock-app-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/clock-app",
      description: "Created a digital clock application using TypeScript and CSS. Added customizable features including multiple time zones and themes. Ensured responsive design for cross-device compatibility."
    }
  ];
  
  return (
    <PageTransition>
      <div className="bg-background min-h-[calc(100vh-65px)] p-6">
        <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden h-[240px] flex flex-col justify-center items-center mb-6">
          <div className="absolute w-full h-full bg-gradient-to-br from-[#5D4EBF] to-[#7766CC] opacity-50 z-0" />
          
          <div className="z-10 text-center">
            <p className="text-2xl text-white/80 mb-2">I'm,</p>
            <h1 className="text-6xl font-bold">{firstName}</h1>
            <h1 className="text-6xl font-bold mb-2">{lastName}</h1>
          </div>
          
          <div className="absolute right-6 bottom-6 w-16 h-16 z-10">
            <div className="w-full h-full rounded-full border-2 border-dashed border-white/40 animate-spin-slow flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-white font-bold">2024</span>
            </div>
          </div>
        </div>
        
        <StaggerChildren className="space-y-8">
          {/* About section */}
          <motion.section variants={fadeUpVariants}>
            <h2 className="text-xl font-bold mb-4 flex items-center text-foreground">
              <span className="bg-primary/10 p-2 rounded-full mr-2">
                <Code className="h-5 w-5 text-primary" />
              </span>
              About Me
            </h2>
            
            <div className="space-y-4">
              {bio.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Featured Projects section */}
          <ProjectShowcase projects={featuredProjects} />
          
          {/* Experience section */}
          <motion.section variants={fadeUpVariants} custom={1}>
            <h2 className="text-xl font-bold mb-4 flex items-center text-foreground">
              <span className="bg-primary/10 p-2 rounded-full mr-2">
                <Briefcase className="h-5 w-5 text-primary" />
              </span>
              Experience
            </h2>
            
            <div className="space-y-6">
              {EXPERIENCES.map((experience, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-6">
                  <h3 className="font-bold text-lg text-foreground">{experience.position}</h3>
                  <div className="flex items-center text-foreground/60 mb-2">
                    <span className="font-medium text-primary">{experience.company}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-foreground/60 mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{experience.startDate} – {experience.endDate}</span>
                  </div>
                  
                  <div className="space-y-2 mb-3 text-foreground/80">
                    {experience.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <p>{achievement}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {experience.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Education section */}
          <motion.section variants={fadeUpVariants} custom={2}>
            <h2 className="text-xl font-bold mb-4 flex items-center text-foreground">
              <span className="bg-primary/10 p-2 rounded-full mr-2">
                <GraduationCap className="h-5 w-5 text-primary" />
              </span>
              Education
            </h2>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                  <h3 className="font-bold text-lg text-foreground">{edu.institution}</h3>
                  <p className="text-foreground/80">{edu.degree}</p>
                  <div className="flex justify-between text-sm text-foreground/60 mt-1">
                    <span>{edu.period}</span>
                    <span>{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Skills section */}
          <motion.section variants={fadeUpVariants} custom={3}>
            <h2 className="text-xl font-bold mb-4 text-foreground">Skills</h2>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
        </StaggerChildren>
      </div>
    </PageTransition>
  );
}