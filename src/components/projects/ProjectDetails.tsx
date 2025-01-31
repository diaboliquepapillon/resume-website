import React from 'react';
import { Star, Award, Trophy, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    image: string;
    title: string;
    details: string;
    technologies: string[];
    achievements: string[];
    github: string;
    link: string;
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="mt-6 space-y-6">
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>
      
      <p className="text-lg text-primary/80 leading-relaxed">{project.details}</p>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-accent1 text-lg flex items-center gap-2">
          <Star className="w-5 h-5" />
          Key Skills & Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full
                       hover:bg-primary/20 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="font-semibold text-accent2 text-lg flex items-center gap-2">
          <Award className="w-5 h-5" />
          Achievements
        </h4>
        <ul className="space-y-3">
          {project.achievements.map((achievement, i) => (
            <li key={i} className="flex items-center gap-3 group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}>
              <Trophy className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
              <span className="text-primary/80 group-hover:text-primary transition-colors">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex gap-4 pt-4">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl
                   hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          View Details
        </a>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl
                   hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-lg group"
        >
          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;