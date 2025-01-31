import React from 'react';
import Room from './Room';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent1/20 to-transparent pointer-events-none" />
      
      <div className="text-center z-10 mb-8 space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-primary animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Aylin Vahabova
        </h1>
        <p className="text-xl md:text-2xl text-primary/90 animate-slide-up max-w-2xl mx-auto px-4">
          Data Scientist & Machine Learning Engineer
        </p>
        <p className="text-lg text-primary/80 max-w-xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Transforming complex data into actionable insights. Specializing in machine learning, 
          data analytics, and AI-driven solutions.
        </p>
        <div className="flex gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
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
      </div>
      
      <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <Room />
      </div>
    </section>
  );
};

export default Hero;