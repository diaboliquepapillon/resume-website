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
      
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 opacity-0 animate-[fade-in_0.8s_ease-out_forwards]">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary bg-clip-text">
                Aylin Vahabova
              </h1>
              <div className="flex gap-4 sm:gap-6">
                <a 
                  href="https://github.com/diaboliquepapillon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="https://linkedin.com/in/aylinvahabova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="https://kaggle.com/aylinchik" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <Database className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="https://drive.google.com/drive/folders/1r58UaN21Io3vhiS7Dk0Lp1_GD92UnGbP?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:-translate-y-1"
                >
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary/90 font-semibold">
                Final Year Computer Science Student (Data Science)
              </h2>
              <p className="text-base sm:text-lg text-primary/80 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/30 p-4 sm:p-6 rounded-xl border border-primary/10 shadow-lg">
                Passionate about transforming complex data into actionable insights. 
                Specializing in data analytics and visualization, with expertise in Python, 
                SQL, and statistical analysis. Committed to driving data-informed decisions 
                and uncovering meaningful patterns in data.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
              <a 
                href="#projects" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex items-center gap-2 text-sm sm:text-base"
              >
                View Projects
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1" />
              </a>
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 shadow-lg text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side - Room visualization */}
          <div className="h-[300px] sm:h-[400px] lg:h-[600px] opacity-0 animate-[fade-in_0.8s_ease-out_0.9s_forwards]">
            <Room />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_0.8s_ease-out_1.2s_forwards]">
        <button 
          onClick={scrollToProjects} 
          className="text-primary/60 hover:text-primary transition-colors duration-300 p-2"
          aria-label="Scroll to projects"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;