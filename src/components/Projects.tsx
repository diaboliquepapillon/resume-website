import React from 'react';
import { Rocket } from 'lucide-react';
import ProjectCard from './projects/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-accent1/10 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent1/10 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-primary animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold animate-slide-up bg-gradient-to-r from-primary via-accent1 to-accent2 bg-clip-text text-transparent">
              Projects & Experience
            </h2>
            <Rocket className="w-8 h-8 text-accent2 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto animate-fade-in">
            A showcase of my journey through innovation, leadership, and technical excellence, 
            featuring projects that demonstrate my commitment to creating impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;