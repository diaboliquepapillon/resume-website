import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { FileText } from 'lucide-react';
import EducationDialog from './about/EducationDialog';
import WorkExperienceDialog from './about/WorkExperienceDialog';
import CertificationsDialog from './about/CertificationsDialog';
import SkillsSection from './about/SkillsSection';
import InterestsSection from './about/InterestsSection';
import ImpossibleList from './about/ImpossibleList';

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
                <EducationDialog education={education} />
                <WorkExperienceDialog workExperience={workExperience} />
                <CertificationsDialog certifications={certifications} />
              </div>

              <InterestsSection />
              <SkillsSection softSkills={softSkills} programmingSkills={programmingSkills} />
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
            
            <ImpossibleList 
              completed={impossibleList.completed}
              inProgress={impossibleList.inProgress}
              future={impossibleList.future}
            />
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