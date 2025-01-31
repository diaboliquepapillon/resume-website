import React from 'react';
import { Brain, Code } from 'lucide-react';

interface SkillsSectionProps {
  softSkills: string[];
  programmingSkills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ softSkills, programmingSkills }) => {
  return (
    <div className="space-y-8">
      {/* Soft Skills */}
      <div className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary animate-bounce" />
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent1/40 text-primary rounded-lg font-medium transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in hover:shadow-lg flex items-center gap-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Programming Skills */}
      <div className="p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
          <Code className="w-6 h-6 text-primary animate-bounce" />
          Programming Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {programmingSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent2/40 text-primary rounded-lg font-medium transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in hover:shadow-lg flex items-center gap-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;