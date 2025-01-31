import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Award, ArrowRight, Trophy } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    link: string;
    github: string;
    image: string;
    details: string;
    technologies: string[];
    achievements: string[];
    icon: React.ReactNode;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-white/95 backdrop-blur-sm 
                   hover:border-primary/40 transition-all duration-500 animate-slide-up
                   hover:shadow-[0_20px_50px_rgba(38,87,74,0.2)] hover:-translate-y-2 cursor-pointer
                   transform perspective-[1000px] hover:rotate-y-2"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative h-52 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent1/50 to-transparent opacity-80" />
            <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
              {project.icon}
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-primary group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-primary/70 text-sm line-clamp-2 group-hover:text-primary/90 transition-colors">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 2).map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full
                           hover:bg-primary/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className="px-3 py-1 text-xs bg-accent2/10 text-accent2 rounded-full">
                  +{project.technologies.length - 2} more
                </span>
              )}
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <span className="flex items-center gap-2 text-sm text-accent1">
                <Trophy className="w-4 h-4" />
                {project.achievements[0]}
              </span>
              <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary transform group-hover:translate-x-2 transition-all" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[700px] bg-white/95 backdrop-blur-sm border-2 border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-primary">
            {project.icon}
            {project.title}
          </DialogTitle>
          <DialogDescription>
            <ProjectDetails project={project} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;