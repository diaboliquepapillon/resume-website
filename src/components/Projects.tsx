import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Award, ArrowRight } from 'lucide-react';

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
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-accent1/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(241,194,220,0.1),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(205,214,115,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold animate-slide-up text-primary">
            Projects & Experience
          </h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto animate-fade-in">
            Explore my journey through data science and machine learning, featuring projects 
            that demonstrate my expertise in turning complex challenges into innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-white/80 backdrop-blur-sm 
                           hover:border-primary/40 transition-all duration-500 animate-slide-up cursor-pointer
                           hover:shadow-2xl hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent1 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/90 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-accent1/10 text-primary/70 rounded-full
                                   hover:bg-accent1/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-2">
                        {project.achievements.slice(0, 1).map((achievement, i) => (
                          <span 
                            key={i}
                            className="flex items-center gap-1 text-sm text-primary/60"
                          >
                            <Award className="w-4 h-4" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary/80 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[700px] bg-background/95 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
                  <DialogDescription>
                    <div className="mt-6 space-y-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                      <p className="text-lg text-primary/80 leading-relaxed">{project.details}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-4 py-2 text-sm bg-accent1/20 text-primary/70 rounded-full
                                       hover:bg-accent1/30 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg">Key Achievements</h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-3 group">
                              <Award className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                              <span className="text-primary/80 group-hover:text-primary transition-colors">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl
                                   hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Github className="w-5 h-5" />
                          View Code
                        </a>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl
                                   hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-lg"
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