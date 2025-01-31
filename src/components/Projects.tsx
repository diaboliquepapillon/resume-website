import React from 'react';

const projects = [
  {
    title: "Monash Innovation Guarantee - Microsoft",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives. Developed innovation, leadership, and teamwork skills addressing real-world challenges.",
    link: "#"
  },
  {
    title: "Residential Office Bearer - MSA",
    description: "Represented over 3,000 residents, conducting detailed data analysis on residential conditions and providing actionable recommendations that enhanced living standards.",
    link: "#"
  },
  {
    title: "Teamwork Virtual Internship",
    description: "Collaborated globally to analyze McDermott's tools using Python's Scikit-Learn library, achieving 85% accuracy in price optimization forecasts.",
    link: "#"
  },
  {
    title: "CommBank Future Leader Award",
    description: "Recognized as one of Australia's Top 100 Future Leaders for exceptional leadership and innovation in community-driven initiatives.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slide-up text-primary">Projects & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;