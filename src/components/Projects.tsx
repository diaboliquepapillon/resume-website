import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, ExternalLink, Award, ArrowRight, Sparkles, Star, Trophy, Briefcase, GraduationCap, Globe, Rocket } from 'lucide-react';

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
    achievements: ["AI-driven solutions for sustainability", "Real-world impact through teamwork"],
    icon: <Briefcase className="w-8 h-8 text-[#8B5CF6]" />
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
    achievements: ["85% Forecast Accuracy", "UN SDGs Alignment"],
    icon: <Globe className="w-8 h-8 text-[#D946EF]" />
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
    achievements: ["Top 100 Future Leaders", "CommBank Brighter Communities Award"],
    icon: <GraduationCap className="w-8 h-8 text-[#F97316]" />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-background via-background to-accent1/10 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D946EF]/10 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-[#8B5CF6] animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold animate-slide-up bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">
              Projects & Experience
            </h2>
            <Rocket className="w-8 h-8 text-[#F97316] animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto animate-fade-in">
            A showcase of my journey through innovation, leadership, and technical excellence, 
            featuring projects that demonstrate my commitment to creating impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-2xl border-2 border-[#8B5CF6]/20 bg-white/95 backdrop-blur-sm 
                           hover:border-[#8B5CF6]/40 transition-all duration-500 animate-slide-up
                           hover:shadow-[0_20px_50px_rgba(139,92,246,0.2)] hover:-translate-y-2 cursor-pointer
                           transform perspective-[1000px] hover:rotate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/80 via-[#D946EF]/50 to-transparent opacity-80" />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 rounded-xl shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-primary/70 text-sm line-clamp-2 group-hover:text-primary/90 transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full
                                   hover:bg-[#8B5CF6]/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-3 py-1 text-xs bg-[#F97316]/10 text-[#F97316] rounded-full">
                          +{project.technologies.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4">
                      <span className="flex items-center gap-2 text-sm text-[#D946EF]">
                        <Trophy className="w-4 h-4" />
                        {project.achievements[0]}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#8B5CF6]/40 group-hover:text-[#8B5CF6] transform group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[700px] bg-white/95 backdrop-blur-sm border-2 border-[#8B5CF6]/20">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-[#8B5CF6]">
                    {project.icon}
                    {project.title}
                  </DialogTitle>
                  <DialogDescription>
                    <div className="mt-6 space-y-6">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#8B5CF6]/50 to-transparent" />
                      </div>
                      
                      <p className="text-lg text-primary/80 leading-relaxed">{project.details}</p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#D946EF] text-lg flex items-center gap-2">
                          <Star className="w-5 h-5" />
                          Key Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-4 py-2 text-sm bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full
                                       hover:bg-[#8B5CF6]/20 transition-colors duration-300 animate-fade-in"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-[#F97316] text-lg flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Achievements
                        </h4>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-3 group animate-fade-in"
                                style={{ animationDelay: `${i * 0.1}s` }}>
                              <Trophy className="w-5 h-5 text-[#8B5CF6]/60 group-hover:text-[#8B5CF6] transition-colors" />
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
                          className="flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white rounded-xl
                                   hover:bg-[#7C3AED] transition-all duration-300 hover:scale-105 shadow-lg group"
                        >
                          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          View Details
                        </a>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-xl
                                   hover:bg-[#8B5CF6]/10 transition-all duration-300 hover:scale-105 shadow-lg group"
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