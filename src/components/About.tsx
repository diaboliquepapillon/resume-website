
import React from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import AboutTabs from './about/AboutTabs';

const certifications = [
  "Atlassian Agile Project Management Professional Certificate",
  "Become a Data Analyst - LinkedIn",
  "Career Essentials in Data Analysis by Microsoft and LinkedIn",
  "Career Essentials in Generative AI by Microsoft and LinkedIn",
  "Negotiation Professional Certificate by American Negotiation Institute",
  "ServiceNow IT Leadership Professional Certificate",
  "Social Media Marketing Professional Certificate by Hootsuite",
  "Dataiku Core Designer"
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
    title: "Program Facilitator",
    company: "Australian School of Entrepreneurship",
    period: "Feb 2024 - Present",
    description: [
      "Lead group workshops, develop engaging content, conduct public speaking, and provide individual mentoring sessions",
      "Assist in planning, coordinating, and delivering special events and training programs to ensure smooth execution"
    ],
    skills: ["Workshop Facilitation", "Content Development", "Public Speaking", "Mentoring", "Event Planning", "Program Delivery"]
  },
  {
    title: "Campaign Assistant",
    company: "Julian Hill MP Office",
    period: "Jan 2024 - Present",
    description: [
      "Collected and analysed voter data from door-to-door canvassing, identifying key trends to optimise campaign strategy",
      "Transformed raw field data into actionable insights using statistical analysis and data visualisation"
    ],
    skills: ["Data Collection", "Data Analysis", "Strategic Planning", "Statistical Analysis", "Data Visualization"]
  },
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

          <AboutTabs
            education={education}
            workExperience={workExperience}
            certifications={certifications}
            volunteerExperience={volunteerExperience}
            softSkills={softSkills}
            programmingSkills={programmingSkills}
            impossibleList={impossibleList}
          />
        </Tabs>
      </div>
    </section>
  );
};

export default About;
