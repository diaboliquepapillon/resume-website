import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Award, ArrowRight, Sparkles, Star, Trophy } from 'lucide-react';

const projects = [
  {
    title: "Monash Innovation Guarantee - Microsoft",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives.",
    link: "#",
    github: "https://github.com/yourusername/project1",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    details: "Led a team of 4 to develop and implement machine learning models for predicting energy consumption patterns. Achieved 15% improvement in energy efficiency through data-driven recommendations.",
    technologies: [
      "Innovation & Problem-Solving",
      "Teamwork & Collaboration",
      "Leadership",
      "AI & Data-Driven Decision Making"
    ],
    achievements: ["AI-driven solutions for sustainability", "Real-world impact through teamwork"]
  },
  {
    title: "Teamwork Virtual Internship (McDermott)",
    description: "Global collaboration using Python's Scikit-Learn for price optimization forecasts.",
    link: "#",
    github: "https://github.com/yourusername/project2",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    details: "Developed predictive models using Python and Scikit-Learn that achieved 85% accuracy in forecasting price optimizations. Collaborated with team members across 3 different time zones.",
    technologies: [
      "Data Analytics & Machine Learning",
      "Strategic Thinking",
      "Global Collaboration",
      "Business & Sustainability Alignment"
    ],
    achievements: ["85% Forecast Accuracy", "UN SDGs Alignment"]
  },
  {
    title: "2024 Top100 Future Leaders",
    description: "Recognized among Australia's Top 100 Future Leaders for exceptional innovation.",
    link: "#",
    github: "https://github.com/yourusername/project3",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    details: "Selected from over 1,000 applicants nationwide. Led multiple community initiatives that impacted over 5,000 students.",
    technologies: [
      "Leadership & Influence",
      "Innovation & Impact",
      "Community Engagement",
      "Recognition & Prestige"
    ],
    achievements: ["Top 100 Future Leaders", "CommBank Brighter Communities Award"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-accent1/10 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent1/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent2/10 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold animate-slide-up bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Projects & Experience
            </h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
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
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-white/90 backdrop-blur-sm 
                           hover:border-primary/40 transition-all duration-500 animate-slide-up
                           hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent1 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/90 line-clamp-2 text-lg">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 text-sm bg-accent1/10 text-primary/70 rounded-full
                                   hover:bg-accent1/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        {project.achievements.slice(0, 1).map((achievement, i) => (
                          <span 
                            key={i}
                            className="flex items-center gap-2 text-sm text-primary/60 group-hover:text-primary transition-colors"
                          >
                            <Trophy className="w-4 h-4" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[700px] bg-background/95 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
                    <Star className="w-6 h-6 text-accent1 animate-pulse" />
                    {project.title}
                  </DialogTitle>
                  <DialogDescription>
                    <div className="mt-6 space-y-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-72 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                      />
                      <p className="text-lg text-primary/80 leading-relaxed">{project.details}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-accent2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-4 py-2 text-sm bg-accent1/20 text-primary/70 rounded-full
                                       hover:bg-accent1/30 transition-colors duration-300 animate-fade-in"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary text-lg flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-accent2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-3 group animate-fade-in"
                                style={{ animationDelay: `${i * 0.1}s` }}>
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
                                   hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg group"
                        >
                          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          View Code
                        </a>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl
                                   hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-lg group"
                        >
                          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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