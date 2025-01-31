import React from 'react';
import Room from './Room';
import { ChevronDown, Github, Linkedin, FileText, Database } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-accent1/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(241,194,220,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(205,214,115,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary animate-slide-up bg-clip-text">
                Aylin Vahabova
              </h1>
              <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <a 
                  href="https://github.com/diaboliquepapillon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 transform"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a 
                  href="https://linkedin.com/in/aylinvahabova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 transform"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a 
                  href="https://kaggle.com/aylinchik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 transform"
                >
                  <Database className="w-7 h-7" />
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1r58UaN21Io3vhiS7Dk0Lp1_GD92UnGbP?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110 transform"
                >
                  <FileText className="w-7 h-7" />
                </a>
              </div>
            </div>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl lg:text-3xl text-primary/90 font-semibold">
                Data Scientist & Machine Learning Engineer
              </h2>
              <p className="text-lg text-primary/80 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-xl border border-primary/10 shadow-lg">
                Transforming complex data into actionable insights. Specializing in machine learning, 
                data analytics, and AI-driven solutions. Passionate about leveraging technology to solve 
                real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg group flex items-center gap-2"
              >
                View Projects
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side - Room visualization */}
          <div className="lg:h-[600px] animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Room />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects} 
          className="text-primary/60 hover:text-primary transition-colors p-2"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;