import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Github, Linkedin, Database } from 'lucide-react';

const Index = () => {
  return (
    <main className="w-full relative min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      
      {/* Social Links Footer */}
      <footer className="w-full py-12 bg-background/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 items-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-colors duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://kaggle.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary/70 hover:text-primary transition-colors duration-300"
          >
            <Database className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;