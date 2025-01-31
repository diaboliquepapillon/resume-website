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
    details: [
      "Data Science Major on Full-Scholarship",
      "Ancora Imparo Leadership Program Participant",
      "Women in IT mentoring program mentee",
      "Global Immersion Guarantee Participant in Indonesia"
    ]
  }
];

const workExperience = [
  {
    title: "IBL Intern",
    company: "Transurban",
    period: "Jul 2024 - Dec 2024",
    description: [
      "Conducted exploratory data analysis (EDA) on large datasets to derive actionable insights and optimise traffic flow",
      "Developed predictive models and conducted EDA to derive insights into customer behaviour and optimise pricing strategies",
      "Utilised SQL and Python for data extraction and analysis, employing tools like Jupyter Notebook for automation and visualisations",
      "Created data-driven reports and dashboards using Tableau to track key performance indicators (KPIs)"
    ]
  },
  {
    title: "Faculty of IT Ambassador",
    company: "Monash University",
    period: "Jul 2023 - Present",
    description: [
      "Represented the Faculty of IT at events, enhancing collaboration and teamwork across diverse cultural settings",
      "Delivered strategic communications to engage students and stakeholders, enhancing the understanding of data science applications"
    ]
  },
  {
    title: "Alumni Support Assistant",
    company: "Monash University",
    period: "Jun 2023 - Dec 2024",
    description: [
      "Fostered strong relationships with alumni and donors, emphasising the transformational impact of their contributions",
      "Utilised data analytics to develop and optimize engagement strategies, resulting in a 62.5% recurring gift ratio",
      "Raised $18,275 across 65 contributions in 2024",
      "Contributed to raising $9,950 in 2023, with a 50% recurring gift ratio, 26 recurring gifts out of 52 unique donors",
      "Collaborated with cross-functional teams to present insights from data models, improving decision-making"
    ]
  },
  {
    title: "Russian Language Drop-in",
    company: "Monash Student Association",
    period: "June 2023 - Oct 2023",
    description: [
      "Fostered cultural exchange and language learning by teaching Russian to 20+ students",
      "Enhanced communication and engagement within the university community"
    ]
  }
];

const softSkills = [
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Data Analysis",
  "Strategic Thinking"
];

const programmingSkills = [
  "Python",
  "SQL",
  "Tableau",
  "Jupyter Notebook",
  "Statistical Modeling",
  "Data Visualization",
  "Predictive Modeling",
  "Cloud Technologies"
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

const volunteerExperience = [
  {
    title: "Residential Advisor",
    organization: "Monash Residential Services",
    period: "June 2023 - Dec 2024",
    description: [
      "Serving as a Residential Advisor within Monash Residential Services, providing guidance and support to students",
      "Spearheaded initiatives that improved residential standards, showcasing leadership and problem-solving skills"
    ]
  },
  {
    title: "Russian Language Drop-in",
    organization: "Monash Student Association",
    period: "June 2023 - Oct 2023",
    description: [
      "Fostered cultural exchange and language learning by teaching Russian to 20+ students",
      "Enhanced communication and engagement within the university community"
    ]
  }
];

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
                Passionate Computer Science undergraduate at Monash University with expertise in AI, data analytics, and cloud technologies. 
                Skilled in Python, SQL, Tableau, and predictive modelling, with hands-on experience in data analysis and visualisation. 
                Strong communicator and problem-solver, eager to contribute to impactful projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <EducationDialog education={education} />
                <WorkExperienceDialog workExperience={workExperience} />
                <CertificationsDialog certifications={certifications} />
              </div>

              <div className="space-y-8">
                <div className="bg-white/90 p-6 rounded-xl border border-primary/20 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Volunteer Experience</h3>
                  <div className="space-y-6">
                    {volunteerExperience.map((volunteer, index) => (
                      <div key={index} className="p-4 bg-accent1/10 rounded-lg">
                        <h4 className="font-bold text-lg text-primary">{volunteer.title}</h4>
                        <p className="text-primary/90">{volunteer.organization}</p>
                        <p className="text-primary/80 text-sm mb-2">{volunteer.period}</p>
                        <ul className="list-disc pl-4 space-y-1">
                          {volunteer.description.map((desc, idx) => (
                            <li key={idx} className="text-primary/90">{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
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
