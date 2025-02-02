import React from 'react';
import { Database, ChartBar, Globe, Code } from 'lucide-react';

const projects = [
  {
    title: "Monash Innovation Guarantee",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives.",
    details: "Led a team of 4 to develop and implement machine learning models for predicting energy consumption patterns. Achieved 15% improvement in energy efficiency through data-driven recommendations.",
    link: "#",
    github: "https://github.com/yourusername/project1",
    technologies: [
      "Innovation & Problem-Solving",
      "Teamwork & Collaboration",
      "Leadership",
      "AI & Data-Driven Decision Making"
    ],
    achievements: [
      "AI-driven solutions for sustainability",
      "Real-world impact through teamwork"
    ],
    icon: <Database className="w-8 h-8 text-primary" />,
    image: "/lovable-uploads/89091e57-cbcf-4be3-8624-4dc9232090c7.png"
  },
  {
    title: "Data Science Portfolio",
    description: "A collection of data science projects showcasing skills in machine learning, data analysis, and visualization.",
    details: "Created comprehensive data analysis projects using Python, R, and various ML libraries. Implemented visualization techniques to communicate insights effectively.",
    link: "#",
    github: "https://github.com/yourusername/project2",
    technologies: [
      "Python",
      "R",
      "Machine Learning",
      "Data Visualization"
    ],
    achievements: [
      "Featured on Kaggle",
      "5000+ views on GitHub"
    ],
    icon: <ChartBar className="w-8 h-8 text-accent1" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    title: "Global Data Analysis",
    description: "Analysis of worldwide trends using big data technologies and advanced analytics.",
    details: "Conducted analysis of global datasets to identify patterns and trends. Used cloud computing for processing large-scale data.",
    link: "#",
    github: "https://github.com/yourusername/project3",
    technologies: [
      "Big Data",
      "Cloud Computing",
      "Statistical Analysis",
      "Global Trends"
    ],
    achievements: [
      "Published research paper",
      "Presented at conference"
    ],
    icon: <Globe className="w-8 h-8 text-accent2" />,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    title: "AI Development Projects",
    description: "Series of artificial intelligence projects focusing on natural language processing and computer vision.",
    details: "Developed AI models for various applications including text analysis and image recognition. Implemented deep learning architectures.",
    link: "#",
    github: "https://github.com/yourusername/project4",
    technologies: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "TensorFlow"
    ],
    achievements: [
      "Won AI competition",
      "Open source contributions"
    ],
    icon: <Code className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
  }
];

const DataScienceWebsites = () => {
  return (
    <section id="websites" className="py-20 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Data Science Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-lg">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-primary/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent1 transition-colors"
                  >
                    View on GitHub
                  </a>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataScienceWebsites;