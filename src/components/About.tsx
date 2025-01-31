import React from 'react';
import { Brain, Database, ChartBar, Code, Users, Globe } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const About = () => {
  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Data Analytics Professional Certificate",
    "Microsoft Azure Data Fundamentals"
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Monash University",
      year: "2021-2024",
      details: "Major in Data Science"
    }
  ];

  const workExperience = [
    {
      title: "Data Science Intern",
      company: "Transurban",
      period: "2023",
      description: "Analyzed traffic patterns and developed predictive models"
    },
    {
      title: "Faculty IT Ambassador",
      company: "Monash University",
      period: "2022-2023",
      description: "Provided technical support and conducted workshops"
    }
  ];

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
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-6 border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Brain className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p>Click to view educational background</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Education</DialogTitle>
                <DialogDescription>
                  <div className="mt-4">
                    {education.map((edu, index) => (
                      <div key={index} className="mb-4 p-4 border border-primary rounded">
                        <h4 className="font-bold">{edu.degree}</h4>
                        <p>{edu.institution}</p>
                        <p>{edu.year}</p>
                        <p>{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-6 border border-primary hover:bg-accent2 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Code className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                <p>Click to view work history</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Work Experience</DialogTitle>
                <DialogDescription>
                  <div className="mt-4">
                    {workExperience.map((work, index) => (
                      <div key={index} className="mb-4 p-4 border border-primary rounded">
                        <h4 className="font-bold">{work.title}</h4>
                        <p>{work.company}</p>
                        <p>{work.period}</p>
                        <p>{work.description}</p>
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <div className="p-6 border border-primary hover:bg-accent1 hover:text-primary transition-colors duration-300 cursor-pointer">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Certifications</h3>
                <p>Click to view certifications</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Certifications</DialogTitle>
                <DialogDescription>
                  <div className="mt-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="mb-2 p-2 border border-primary rounded">
                        {cert}
                      </div>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
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