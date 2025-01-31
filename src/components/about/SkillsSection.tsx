import React from 'react';
import { Brain, Code } from 'lucide-react';

interface SkillsSectionProps {
  softSkills: string[];
  programmingSkills: string[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ softSkills, programmingSkills }) => {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
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
  );
};

export default SkillsSection;