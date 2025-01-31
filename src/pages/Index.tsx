import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Github, Linkedin, Database } from 'lucide-react';

const Index = () => {
  return (
    <main className="w-full relative min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Social Links Footer */}
      <footer className="w-full py-8 bg-background">
        <div className="max-w-4xl mx-auto flex justify-center gap-8 items-center">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent1 transition-colors duration-300"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent2 transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="https://kaggle.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent1 transition-colors duration-300"
          >
            <Database className="w-8 h-8" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;