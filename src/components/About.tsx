import React from 'react';
import { Brain, Database, ChartBar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          Motivated and innovative Computer Science undergraduate at Monash University with a passion for data analytics, AI, and 
          impactful solutions. Proficient in Python, SQL, Tableau, and cloud platforms, with practical experience in exploratory data 
          analysis, predictive modeling, and data visualization. Strong communicator and team collaborator eager to simplify technical 
          concepts and contribute to cutting-edge projects in AI and analytics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <Brain className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
            <p>Exploratory data analysis and predictive modeling for actionable insights</p>
          </div>
          
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <Database className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
            <p>SQL and Python for data extraction, automation, and visualizations</p>
          </div>
          
          <div className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300">
            <ChartBar className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Visualization</h3>
            <p>Creating impactful dashboards and reports using Tableau</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;