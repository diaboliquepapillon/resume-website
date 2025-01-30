import React from 'react';

const projects = [
  {
    title: "Transurban Data Analysis",
    description: "Conducted exploratory data analysis (EDA) on large datasets to derive actionable insights and optimize traffic flow. Developed predictive models for customer behavior analysis.",
    link: "#"
  },
  {
    title: "Faculty IT Ambassador",
    description: "Enhanced collaboration across diverse cultural settings and delivered strategic communications about data science applications at Monash University.",
    link: "#"
  },
  {
    title: "Global Immersion Program",
    description: "Partnered with cross-cultural teams in Indonesia to address global sustainability challenges, developing negotiation and teamwork skills.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slide-up">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 border border-black hover:bg-black hover:text-white transition-colors duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;