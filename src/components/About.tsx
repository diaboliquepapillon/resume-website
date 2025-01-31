import React from 'react';
import { Brain, Database, ChartBar, Code, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-primary">
          Motivated Computer Science undergraduate at Monash University with proven expertise in data analytics and community leadership. 
          Successfully utilized data analytics to optimize engagement strategies, achieving a 62.5% recurring gift ratio and raising over $18,275 
          across 65 contributions. Proficient in Python, SQL, R, and Tableau, with strong experience in statistical modeling and data visualization.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300">
            <Brain className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
            <p>Advanced analytics and predictive modeling with Python and R</p>
          </div>
          
          <div className="p-6 border border-primary hover:bg-accent2 hover:text-primary transition-colors duration-300">
            <Code className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Programming</h3>
            <p>Python, SQL, R, Tableau, Jupyter, Statistical Modeling</p>
          </div>
          
          <div className="p-6 border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300">
            <Users className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Leadership</h3>
            <p>Team collaboration, community engagement, and project management</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Interests</h3>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-accent2 text-primary rounded-full">Traveling</span>
            <span className="px-4 py-2 bg-accent1 text-primary rounded-full">Soccer</span>
            <span className="px-4 py-2 bg-accent2 text-primary rounded-full">Movie reviewing</span>
            <span className="px-4 py-2 bg-accent1 text-primary rounded-full">Baking</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;