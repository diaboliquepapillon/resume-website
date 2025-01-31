import React from 'react';
import { Brain, Code, Sparkles, Rocket, Heart, Zap, Coffee, Star, Lightbulb, Users, MessageSquare, Target } from 'lucide-react';

interface SkillsSectionProps {
  softSkills: string[];
  programmingSkills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ softSkills, programmingSkills }) => {
  const softSkillIcons = [Heart, Users, MessageSquare, Lightbulb, Target, Star];
  const programmingIcons = [Code, Rocket, Zap, Coffee, Brain, Sparkles];

  return (
    <div className="mt-16 space-y-12">
      {/* Soft Skills */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-accent1/10 via-white to-accent2/10 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-8">
          <Brain className="w-8 h-8 text-primary animate-pulse" />
          <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={skill}
              className="group flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {React.createElement(softSkillIcons[index % softSkillIcons.length], {
                className: "w-6 h-6 text-accent1 group-hover:animate-bounce"
              })}
              <span className="text-primary font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Programming Skills */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-accent2/10 via-white to-accent1/10 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-8">
          <Code className="w-8 h-8 text-primary animate-pulse" />
          <h3 className="text-2xl font-bold text-primary">Programming</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {programmingSkills.map((skill, index) => (
            <div
              key={skill}
              className="group flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {React.createElement(programmingIcons[index % programmingIcons.length], {
                className: "w-6 h-6 text-accent2 group-hover:animate-bounce"
              })}
              <span className="text-primary font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;