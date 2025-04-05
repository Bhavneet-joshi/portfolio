import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Database, Server, Wrench, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillsPageProps {
  onBack?: () => void;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

// Skills organized by category with relevant icons
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: <Code className="h-5 w-5" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI"
    ]
  },
  {
    name: "Backend Development",
    icon: <Server className="h-5 w-5" />,
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "Java",
      "RESTful APIs",
      "GraphQL",
      "MongoDB",
      "PostgreSQL"
    ]
  },
  {
    name: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Database Design",
      "Data Modeling"
    ]
  },
  {
    name: "Tools & Technologies",
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "VS Code",
      "Postman",
      "Jest",
      "CI/CD"
    ]
  },
  {
    name: "Soft Skills",
    icon: <Brain className="h-5 w-5" />,
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Management",
      "Agile/Scrum",
      "Technical Writing"
    ]
  }
];

export function SkillsPage({ onBack }: SkillsPageProps) {
  return (
    <div className="space-y-6 pb-16">
      {/* Page header with optional back button */}
      <div className="flex items-center gap-3">
        {onBack && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onBack}
            className="h-9 w-9"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="text-3xl font-bold tracking-tight">Skills & Expertise</h1>
      </div>
      
      {/* Responsive skills grid with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/10 text-secondary-foreground hover:bg-secondary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 