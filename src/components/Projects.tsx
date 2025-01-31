import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Monash Innovation Guarantee - Microsoft",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives. Developed innovation, leadership, and teamwork skills addressing real-world challenges.",
    link: "#",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    details: "Led a team of 4 to develop and implement machine learning models for predicting energy consumption patterns. Achieved 15% improvement in energy efficiency through data-driven recommendations."
  },
  {
    title: "Residential Office Bearer - MSA",
    description: "Represented over 3,000 residents, conducting detailed data analysis on residential conditions and providing actionable recommendations that enhanced living standards.",
    link: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    details: "Created comprehensive surveys and analyzed feedback from 3,000+ residents. Implemented changes that led to a 25% increase in resident satisfaction scores."
  },
  {
    title: "Teamwork Virtual Internship",
    description: "Collaborated globally to analyze McDermott's tools using Python's Scikit-Learn library, achieving 85% accuracy in price optimization forecasts.",
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: "Developed predictive models using Python and Scikit-Learn that achieved 85% accuracy in forecasting price optimizations. Collaborated with team members across 3 different time zones."
  },
  {
    title: "CommBank Future Leader Award",
    description: "Recognized as one of Australia's Top 100 Future Leaders for exceptional leadership and innovation in community-driven initiatives.",
    link: "#",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    details: "Selected from over 1,000 applicants nationwide. Led multiple community initiatives that impacted over 5,000 students."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-slide-up text-primary">Projects & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300 animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-30 group-hover:bg-opacity-0 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>
                    <div className="mt-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-primary mb-4">{project.description}</p>
                      <div className="border-t border-primary pt-4">
                        <h4 className="font-bold mb-2">Project Details</h4>
                        <p className="text-primary">{project.details}</p>
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;