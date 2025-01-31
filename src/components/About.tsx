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
import VolunteerExperienceDialog from './about/VolunteerExperienceDialog';
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
    year: "Feb 2023 - Dec 2025",
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
    title: "Faculty of IT Ambassador",
    company: "Monash University",
    period: "Jul 2023 - Present",
    description: [
      "Represented the Faculty of IT at events, enhancing collaboration and teamwork across diverse cultural settings",
      "Delivered strategic communications to engage students and stakeholders, enhancing the understanding of data science applications"
    ],
    skills: ["Public Speaking", "Communication", "Event Management", "Cultural Awareness", "Leadership"]
  },
  {
    title: "IBL Intern",
    company: "Transurban",
    period: "Jul 2024 - Dec 2024",
    description: [
      "Conducted exploratory data analysis (EDA) on large datasets to derive actionable insights and optimise traffic flow",
      "Developed predictive models and conducted EDA to derive insights into customer behaviour and optimise pricing strategies",
      "Utilised SQL and Python for data extraction and analysis, employing tools like Jupyter Notebook for automation and visualisations",
      "Created data-driven reports and dashboards using Tableau to track key performance indicators (KPIs)"
    ],
    skills: ["Python", "SQL", "Tableau", "Data Analysis", "Predictive Modeling", "Data Visualization"]
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
    ],
    skills: ["Data Analytics", "Relationship Management", "Communication", "Fundraising", "Strategic Planning"]
  },
  {
    title: "Residential Office Bearer",
    company: "Monash Student Association",
    period: "Jan 2024 - Dec 2024",
    description: [
      "Represented over 3,000 residents in advocating for improved residential standards",
      "Conducted detailed research and data analysis on residential conditions, providing actionable recommendations that enhanced living standards"
    ],
    skills: ["Data Analysis", "Research", "Advocacy", "Leadership", "Problem-Solving"]
  }
];

const volunteerExperience = [
  {
    title: "Russian Language Drop-in",
    organization: "Monash Student Association",
    period: "June 2023 - Oct 2023",
    description: [
      "Fostered cultural exchange and language learning by teaching Russian to 20+ students, enhancing communication and engagement within the university community"
    ]
  },
  {
    title: "Residential Advisor",
    organization: "Monash Residential Services",
    period: "June 2023 - Dec 2024",
    description: [
      "Serving as a Residential Advisor within Monash Residential Services, providing guidance and support to students",
      "Spearheaded initiatives that improved residential standards, showcasing leadership and problem-solving skills"
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
  completed: {
    education: [
      "Enrolled in Computer Science at Monash University",
      "Gained proficiency in Python, SQL, R, and Tableau",
      "Completed coursework/projects in data analytics and AI",
      "Built strong problem-solving and coding skills"
    ],
    professional: [
      "Landed first tech internship",
      "Completed AWS certification",
      "Developed a portfolio with case studies & projects",
      "Improved communication and teamwork skills",
      "Built a habit of continuous learning & upskilling",
      "Started networking and engaging in professional communities",
      "Developed a strong work ethic and discipline"
    ],
    travel: [
      "🇦🇪 UAE – Explored the skyline of Dubai and culture of Abu Dhabi",
      "🇮🇩 Indonesia – Experienced Bali's nature and Jakarta's city life"
    ]
  },
  inProgress: {
    education: [
      "Enhancing expertise in machine learning & deep learning",
      "Exploring cloud computing (AWS, GCP, or Azure)",
      "Learning system design patterns"
    ],
    professional: [
      "Building and launching a SaaS product",
      "Contributing to open-source projects",
      "Expanding professional network on LinkedIn & GitHub",
      "Improving time management & productivity skills",
      "Enhancing public speaking & leadership abilities",
      "Developing a personal brand or blog on tech & AI"
    ],
    travel: [
      "🇺🇸 USA – Exploring Silicon Valley, NYC, and major landmarks",
      "🇯🇵 Japan – Immersing in Tokyo's tech scene and Kyoto's history",
      "🇻🇳 Vietnam – Experiencing Vietnamese food, landscapes, and history"
    ]
  },
  future: {
    education: [
      "Earn a Master's degree or specialized certification in AI"
    ],
    professional: [
      "Land a full-time role in AI, data analytics, or machine learning",
      "Speak at conferences or events on data & AI",
      "Become a Senior Data Scientist / AI Engineer",
      "Launch a tech startup or consulting business",
      "Publish research or case studies in the AI space",
      "Mentor 100 aspiring developers",
      "Hold a leadership role (CTO, AI Director, or Head of Data Science)",
      "Build AI-driven solutions for global impact",
      "Write a technical book",
      "Speak at major tech conferences globally",
      "Create an educational platform for developers",
      "Achieve financial independence & work-life balance"
    ],
    travel: [
      "🌎 South America – Visit Brazil, Argentina, Peru and explore Machu Picchu, Rio Carnival, and Patagonia",
      "🇲🇦 Morocco – Discover the Sahara Desert, Marrakech, and North African culture"
    ]
  }
};

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent1/10 to-accent2/10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-primary/90 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg">
            <TabsTrigger value="about" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300">
              About
            </TabsTrigger>
            <TabsTrigger value="impossible-list" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300">
              Impossible List
            </TabsTrigger>
            <TabsTrigger value="resume" className="text-white data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-inner transition-all duration-300">
              Resume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="space-y-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About Me</h2>
              <p className="text-lg md:text-xl leading-relaxed mb-12 text-primary bg-white/90 p-6 rounded-xl border border-primary/20 shadow-lg animate-fade-in">
                Passionate Computer Science undergraduate at Monash University with expertise in AI, data analytics, and cloud technologies. 
                Skilled in Python, SQL, Tableau, and predictive modelling, with hands-on experience in data analysis and visualisation. 
                Strong communicator and problem-solver, eager to contribute to impactful projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <EducationDialog education={education} />
                <WorkExperienceDialog workExperience={workExperience} />
                <CertificationsDialog certifications={certifications} />
                <VolunteerExperienceDialog volunteerExperience={volunteerExperience} />
              </div>

              <div className="grid grid-cols-1 gap-12">
                <InterestsSection />
                <SkillsSection softSkills={softSkills} programmingSkills={programmingSkills} />
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
