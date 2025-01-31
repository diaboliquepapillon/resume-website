import React from 'react';
import { Brain, Code, Users, FileText, GraduationCap, Briefcase, Award, Heart } from 'lucide-react';
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

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent1/10 to-accent2/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-primary/90 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg">
            <TabsTrigger 
              value="about" 
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300"
            >
              About
            </TabsTrigger>
            <TabsTrigger 
              value="impossible-list" 
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300"
            >
              Impossible List
            </TabsTrigger>
            <TabsTrigger 
              value="resume" 
              className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300"
            >
              Resume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                About Me
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-12 text-primary bg-white/90 p-6 rounded-xl border border-primary/20 shadow-lg animate-fade-in">
                Motivated Computer Science undergraduate at Monash University with proven expertise in data analytics and community leadership. 
                Successfully utilized data analytics to optimize engagement strategies, achieving a 62.5% recurring gift ratio and raising over $18,275 
                across 65 contributions. Proficient in Python, SQL, R, and Tableau, with strong experience in statistical modeling and data visualization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent1/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
                      <GraduationCap className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
                      <p className="text-primary/80">Click to view educational background</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold text-primary">Education Journey</DialogTitle>
                      <DialogDescription>
                        <div className="mt-6 space-y-6">
                          {education.map((edu, index) => (
                            <div 
                              key={index} 
                              className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                                  <GraduationCap className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-bold text-xl text-primary">{edu.degree}</h4>
                                  <p className="text-primary/90 font-medium">{edu.institution}</p>
                                  <p className="text-primary/80">{edu.year}</p>
                                  <p className="text-primary mt-2 leading-relaxed">{edu.details}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent2/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
                      <Briefcase className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Work Experience</h3>
                      <p className="text-primary/80">Click to view work history</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold text-primary">Professional Experience</DialogTitle>
                      <DialogDescription>
                        <div className="mt-6 space-y-6">
                          {workExperience.map((work, index) => (
                            <div 
                              key={index} 
                              className="p-6 bg-accent2/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                                  <Briefcase className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                  <h4 className="font-bold text-xl text-primary">{work.title}</h4>
                                  <p className="text-primary/90 font-medium">{work.company}</p>
                                  <p className="text-primary/80">{work.period}</p>
                                  <p className="text-primary mt-2 leading-relaxed">{work.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent1/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
                      <Award className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
                      <h3 className="text-xl font-bold mb-2 text-primary">Certifications</h3>
                      <p className="text-primary/80">Click to view certifications</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw]">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold text-primary">Professional Certifications</DialogTitle>
                      <DialogDescription>
                        <div className="mt-6 space-y-6">
                          {certifications.map((cert, index) => (
                            <div 
                              key={index} 
                              className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                                  <Award className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                  <p className="text-lg font-medium text-primary">{cert}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="mt-8 bg-white p-8 rounded-xl border-2 border-primary/20 shadow-lg animate-fade-in hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div 
                    className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                    onClick={() => {
                      const emojis = ["✈️", "🌎", "🧳", "🗺️"];
                      emojis.forEach((emoji, index) => {
                        const span = document.createElement("span");
                        span.innerText = emoji;
                        span.className = "absolute animate-float pointer-events-none";
                        span.style.left = `${Math.random() * 100}%`;
                        span.style.animationDelay = `${index * 0.2}s`;
                        document.body.appendChild(span);
                        setTimeout(() => span.remove(), 3000);
                      });
                    }}
                  >
                    Traveling
                  </div>
                  <div 
                    className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                    onClick={() => {
                      const emojis = ["⚽", "🥅", "🏃‍♂️", "🎯"];
                      emojis.forEach((emoji, index) => {
                        const span = document.createElement("span");
                        span.innerText = emoji;
                        span.className = "absolute animate-float pointer-events-none";
                        span.style.left = `${Math.random() * 100}%`;
                        span.style.animationDelay = `${index * 0.2}s`;
                        document.body.appendChild(span);
                        setTimeout(() => span.remove(), 3000);
                      });
                    }}
                  >
                    Soccer
                  </div>
                  <div 
                    className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                    onClick={() => {
                      const emojis = ["🎬", "🍿", "📽️", "⭐"];
                      emojis.forEach((emoji, index) => {
                        const span = document.createElement("span");
                        span.innerText = emoji;
                        span.className = "absolute animate-float pointer-events-none";
                        span.style.left = `${Math.random() * 100}%`;
                        span.style.animationDelay = `${index * 0.2}s`;
                        document.body.appendChild(span);
                        setTimeout(() => span.remove(), 3000);
                      });
                    }}
                  >
                    Movie reviewing
                  </div>
                  <div 
                    className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
                    onClick={() => {
                      const emojis = ["🧁", "🥖", "🎂", "👨‍🍳"];
                      emojis.forEach((emoji, index) => {
                        const span = document.createElement("span");
                        span.innerText = emoji;
                        span.className = "absolute animate-float pointer-events-none";
                        span.style.left = `${Math.random() * 100}%`;
                        span.style.animationDelay = `${index * 0.2}s`;
                        document.body.appendChild(span);
                        setTimeout(() => span.remove(), 3000);
                      });
                    }}
                  >
                    Baking
                  </div>
                </div>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                {/* Soft Skills */}
                <div className="p-8 rounded-xl bg-white border-2 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <Brain className="w-6 h-6 text-primary group-hover:animate-bounce" />
                    <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent1 text-primary font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-md animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Programming Skills */}
                <div className="p-8 rounded-xl bg-white border-2 border-primary/20 shadow-lg hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6">
                    <Code className="w-6 h-6 text-primary group-hover:animate-bounce" />
                    <h3 className="text-2xl font-bold text-primary">Programming</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {programmingSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-accent2 text-primary font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-md animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
