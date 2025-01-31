import React from 'react';
import { Brain, Code, Users, FileText, GraduationCap, Briefcase, Award } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Skills from './Skills';

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

  const softSkills = [
    "Leadership",
    "Communication",
    "Analytical Thinking",
    "Problem-Solving",
    "Client Negotiation"
  ];

  const programmingSkills = [
    "Python",
    "SQL",
    "R",
    "Tableau",
    "Jupyter Notebook",
    "Statistical Modeling",
    "HTML5",
    "CSS3",
    "C++"
  ];

  const impossibleList = {
    completed: [
      "Graduate with First Class Honours in Computer Science",
      "Land first tech internship",
      "Complete AWS certification",
      "Present at a tech conference"
    ],
    inProgress: [
      "Build and launch a SaaS product",
      "Contribute to open source projects",
      "Learn system design patterns",
      "Master cloud architecture"
    ],
    future: [
      "Start a tech company",
      "Mentor 100 aspiring developers",
      "Write a technical book",
      "Speak at major tech conferences globally",
      "Create an educational platform for developers"
    ]
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-4xl mx-auto px-4">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <TabsTrigger value="about" className="data-[state=active]:bg-primary/20">About</TabsTrigger>
            <TabsTrigger value="impossible-list" className="data-[state=active]:bg-primary/20">Impossible List</TabsTrigger>
            <TabsTrigger value="resume" className="data-[state=active]:bg-primary/20">Resume</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Me</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-12 text-primary/90 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                Motivated Computer Science undergraduate at Monash University with proven expertise in data analytics and community leadership. 
                Successfully utilized data analytics to optimize engagement strategies, achieving a 62.5% recurring gift ratio and raising over $18,275 
                across 65 contributions. Proficient in Python, SQL, R, and Tableau, with strong experience in statistical modeling and data visualization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-accent1/20 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <GraduationCap className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
                      <p className="text-primary/80">Click to view educational background</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle>Education</DialogTitle>
                      <DialogDescription>
                        <div className="mt-4 space-y-4">
                          {education.map((edu, index) => (
                            <div key={index} className="p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                              <h4 className="font-bold text-lg text-primary">{edu.degree}</h4>
                              <p className="text-primary/80">{edu.institution}</p>
                              <p className="text-primary/70">{edu.year}</p>
                              <p className="text-primary/90 mt-2">{edu.details}</p>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-accent2/20 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <Briefcase className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Work Experience</h3>
                      <p className="text-primary/80">Click to view work history</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle>Work Experience</DialogTitle>
                      <DialogDescription>
                        <div className="mt-4 space-y-4">
                          {workExperience.map((work, index) => (
                            <div key={index} className="p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                              <h4 className="font-bold text-lg text-primary">{work.title}</h4>
                              <p className="text-primary/80">{work.company}</p>
                              <p className="text-primary/70">{work.period}</p>
                              <p className="text-primary/90 mt-2">{work.description}</p>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-accent1/20 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <Award className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Certifications</h3>
                      <p className="text-primary/80">Click to view certifications</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-background/95 backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle>Certifications</DialogTitle>
                      <DialogDescription>
                        <div className="mt-4 space-y-4">
                          {certifications.map((cert, index) => (
                            <div key={index} className="p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
                              {cert}
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-8 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-primary">Interests</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-accent2/80 text-primary rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg">Traveling</span>
                  <span className="px-4 py-2 bg-accent1/80 text-primary rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg">Soccer</span>
                  <span className="px-4 py-2 bg-accent2/80 text-primary rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg">Movie reviewing</span>
                  <span className="px-4 py-2 bg-accent1/80 text-primary rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg">Baking</span>
                </div>
              </div>

              <Skills softSkills={softSkills} programmingSkills={programmingSkills} />
            </div>
          </TabsContent>

          <TabsContent value="impossible-list">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary animate-fade-in">
              My Impossible List
            </h2>
            <p className="text-lg text-primary/80 mb-8 animate-slide-up">
              This is not just a bucket list. It's a dynamic, ever-evolving list of experiences 
              that push my boundaries and challenge my limits.
            </p>
            
            <div className="space-y-12">
              <div className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <span className="text-3xl">✅</span> Completed Goals
                </h3>
                <div className="grid gap-4">
                  {impossibleList.completed.map((goal, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-accent1/20 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <p className="text-primary">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
                style={{ animationDelay: '200ms' }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <span className="text-3xl">🚀</span> In Progress
                </h3>
                <div className="grid gap-4">
                  {impossibleList.inProgress.map((goal, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-accent2/20 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
                      <p className="text-primary">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div 
                className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
                style={{ animationDelay: '400ms' }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <span className="text-3xl">🎯</span> Future Goals
                </h3>
                <div className="grid gap-4">
                  {impossibleList.future.map((goal, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-primary/5 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-2 w-2 bg-primary rounded-full group-hover:animate-pulse"></div>
                      <p className="text-primary">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resume">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary animate-fade-in">Resume</h2>
              <p className="text-lg mb-8">Download my latest resume to learn more about my experience and skills.</p>
              <a 
                href="/path-to-your-resume.pdf" 
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default About;
