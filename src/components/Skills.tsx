import React from 'react';
import { Code, Brain } from 'lucide-react';

interface SkillsProps {
  softSkills: string[];
  programmingSkills: string[];
}

const Skills = ({ softSkills, programmingSkills }: SkillsProps) => {
  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      {/* Soft Skills */}
      <div className="p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="w-6 h-6 text-primary group-hover:animate-bounce" />
          <h3 className="text-2xl font-bold text-primary">Soft Skills</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent1/80 text-primary rounded-full transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Programming Skills */}
      <div className="p-8 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 hover:shadow-xl transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-primary group-hover:animate-bounce" />
          <h3 className="text-2xl font-bold text-primary">Programming</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {programmingSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-accent2/80 text-primary rounded-full transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in hover:shadow-lg"
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

export default Skills;