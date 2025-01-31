import React from 'react';
import EducationDialog from './EducationDialog';
import WorkExperienceDialog from './WorkExperienceDialog';
import CertificationsDialog from './CertificationsDialog';
import VolunteerExperienceDialog from './VolunteerExperienceDialog';
import SkillsSection from './SkillsSection';
import InterestsSection from './InterestsSection';

interface AboutMeTabProps {
  education: any[];
  workExperience: any[];
  certifications: string[];
  volunteerExperience: any[];
  softSkills: string[];
  programmingSkills: string[];
}

const AboutMeTab: React.FC<AboutMeTabProps> = ({
  education,
  workExperience,
  certifications,
  volunteerExperience,
  softSkills,
  programmingSkills
}) => {
  return (
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
  );
};

export default AboutMeTab;