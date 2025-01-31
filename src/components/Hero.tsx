import React from 'react';
import Room from './Room';
import { ChevronDown, Github, Linkedin, FileText, Database } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent1/20 via-accent2/10 to-transparent pointer-events-none" />
      
      <div className="text-center z-10 mb-8 space-y-6 max-w-4xl px-4">
        <div className="space-y-4 mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-primary animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
            Aylin Vahabova
          </h1>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://kaggle.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Database className="w-6 h-6" />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl md:text-2xl text-primary/90 font-semibold">
            Data Scientist & Machine Learning Engineer
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights. Specializing in machine learning, 
            data analytics, and AI-driven solutions. Passionate about leveraging technology to solve 
            real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 animate-bounce">
          <button 
            onClick={scrollToProjects} 
            className="text-primary/60 hover:text-primary transition-colors"
            aria-label="Scroll to projects"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
      
      <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <Room />
      </div>
    </section>
  );
};

export default Hero;