import React from 'react';
import { Brain, Database, ChartBar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          I'm a data scientist and machine learning engineer passionate about transforming data into actionable insights. 
          With expertise in statistical analysis, machine learning, and data visualization, I help organizations make 
          data-driven decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <Brain className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
            <p>Building intelligent systems that learn and adapt from data</p>
          </div>
          
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <Database className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Big Data</h3>
            <p>Processing and analyzing large-scale datasets</p>
          </div>
          
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <ChartBar className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
            <p>Creating meaningful visual representations of complex data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;