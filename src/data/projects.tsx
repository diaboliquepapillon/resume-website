import React from 'react';
import { Briefcase, Globe, GraduationCap } from 'lucide-react';

export const projects = [
  {
    title: "Monash Innovation Guarantee - Microsoft",
    description: "Co-developed an AI-driven solution with Microsoft to advance Monash University's net-zero objectives.",
    link: "#",
    github: "https://github.com/yourusername/project1",
    image: "/lovable-uploads/b8f4dcc2-ec6e-456b-8733-10e521f1a90b.png",
    details: "Led a team of 4 to develop and implement machine learning models for predicting energy consumption patterns. Achieved 15% improvement in energy efficiency through data-driven recommendations.",
    technologies: [
      "Innovation & Problem-Solving",
      "Teamwork & Collaboration",
      "Leadership",
      "AI & Data-Driven Decision Making"
    ],
    achievements: ["AI-driven solutions for sustainability", "Real-world impact through teamwork"],
    icon: <Briefcase className="w-8 h-8 text-primary" />
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
    icon: <Globe className="w-8 h-8 text-accent1" />
  },
  {
    title: "2024 Top100 Future Leaders",
    description: "Recognized among Australia's Top 100 Future Leaders for exceptional innovation.",
    link: "#",
    github: "https://github.com/yourusername/project3",
    image: "/lovable-uploads/2c23cd09-b1f9-4ca9-8542-04af93aa423c.png",
    details: "Selected from over 1,000 applicants nationwide. Led multiple community initiatives that impacted over 5,000 students.",
    technologies: [
      "Leadership & Influence",
      "Innovation & Impact",
      "Community Engagement",
      "Recognition & Prestige"
    ],
    achievements: ["Top 100 Future Leaders", "CommBank Brighter Communities Award"],
    icon: <GraduationCap className="w-8 h-8 text-accent2" />
  }
];