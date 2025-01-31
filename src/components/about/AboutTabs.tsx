import React from 'react';
import {
  TabsContent,
} from "@/components/ui/tabs";
import AboutMeTab from './AboutMeTab';
import ImpossibleList from './ImpossibleList';
import ResumeTab from './ResumeTab';

interface AboutTabsProps {
  education: any[];
  workExperience: any[];
  certifications: string[];
  volunteerExperience: any[];
  softSkills: string[];
  programmingSkills: string[];
  impossibleList: {
    completed: any;
    inProgress: any;
    future: any;
  };
}

const AboutTabs: React.FC<AboutTabsProps> = ({
  education,
  workExperience,
  certifications,
  volunteerExperience,
  softSkills,
  programmingSkills,
  impossibleList
}) => {
  return (
    <>
      <TabsContent value="about">
        <AboutMeTab
          education={education}
          workExperience={workExperience}
          certifications={certifications}
          volunteerExperience={volunteerExperience}
          softSkills={softSkills}
          programmingSkills={programmingSkills}
        />
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
        <ResumeTab />
      </TabsContent>
    </>
  );
};

export default AboutTabs;