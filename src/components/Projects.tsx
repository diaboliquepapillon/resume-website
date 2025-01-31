import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Award } from 'lucide-react';

const projects = [
  {
    title: "Monash Innovation Guarantee - Microsoft",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives.",
    link: "#",
    github: "https://github.com/yourusername/project1",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    details: "Led a team of 4 to develop and implement machine learning models for predicting energy consumption patterns. Achieved 15% improvement in energy efficiency through data-driven recommendations.",
    technologies: ["Python", "TensorFlow", "Azure ML", "Power BI"],
    achievements: ["15% Energy Efficiency Improvement", "Best Innovation Award"]
  },
  {
    title: "Residential Office Bearer - MSA",
    description: "Data-driven improvements for 3,000+ residents through comprehensive analysis and recommendations.",
    link: "#",
    github: "https://github.com/yourusername/project2",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    details: "Created comprehensive surveys and analyzed feedback from 3,000+ residents. Implemented changes that led to a 25% increase in resident satisfaction scores.",
    technologies: ["R", "Tableau", "SQL", "Survey Analysis"],
    achievements: ["25% Satisfaction Increase", "Recognition Award"]
  },
  {
    title: "Teamwork Virtual Internship",
    description: "Global collaboration using Python's Scikit-Learn for price optimization forecasts.",
    link: "#",
    github: "https://github.com/yourusername/project3",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: "Developed predictive models using Python and Scikit-Learn that achieved 85% accuracy in forecasting price optimizations. Collaborated with team members across 3 different time zones.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Git"],
    achievements: ["85% Forecast Accuracy", "Best Team Player Award"]
  },
  {
    title: "CommBank Future Leader Award",
    description: "Recognized among Australia's Top 100 Future Leaders for exceptional innovation.",
    link: "#",
    github: "https://github.com/yourusername/project4",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    details: "Selected from over 1,000 applicants nationwide. Led multiple community initiatives that impacted over 5,000 students.",
    technologies: ["Leadership", "Project Management", "Data Analysis"],
    achievements: ["Top 100 Future Leaders", "Community Impact Award"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up text-primary">
            Projects & Experience
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore my journey through data science and machine learning, featuring projects 
            that demonstrate my expertise in turning complex challenges into innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-xl border border-primary/20 bg-white/50 backdrop-blur-sm 
                           hover:border-primary/40 transition-all duration-300 animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-accent1/20 text-primary/70 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
                  <DialogDescription>
                    <div className="mt-4 space-y-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <p className="text-primary/80">{project.details}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 text-sm bg-accent1/20 text-primary/70 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Key Achievements</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Award className="w-5 h-5 text-primary/60" />
                              <span className="text-primary/80">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
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