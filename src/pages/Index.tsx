import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import DataScienceWebsites from '../components/DataScienceWebsites';
import { Github, Linkedin, Database, FileText } from 'lucide-react';

const Index = () => {
  return (
    <main className="w-full relative min-h-screen">
      <Hero />
      <About />
      <DataScienceWebsites />
      <Projects />
      <Contact />
      
      {/* Enhanced Social Links Footer */}
      <footer className="w-full py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Connect With Me</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://linkedin.com/in/aylinvahabova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/diaboliquepapillon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#333] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-6 h-6" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://kaggle.com/aylinchik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#20BEFF] text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              <Database className="w-6 h-6" />
              <span>Kaggle</span>
            </a>
            <a 
              href="https://drive.google.com/drive/folders/1r58UaN21Io3vhiS7Dk0Lp1_GD92UnGbP?usp=sharing" 
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-6 h-6" />
              <span>Certificates</span>
            </a>
          </div>
          <div className="mt-8 text-center text-sm text-primary opacity-75">
            © {new Date().getFullYear()} Aylin Vahabova. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;