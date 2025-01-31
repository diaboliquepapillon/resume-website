import React from 'react';

interface CategoryGoals {
  education: string[];
  professional: string[];
  travel: string[];
}

interface ImpossibleListProps {
  completed: CategoryGoals;
  inProgress: CategoryGoals;
  future: CategoryGoals;
}

const ImpossibleList: React.FC<ImpossibleListProps> = ({ completed, inProgress, future }) => {
  const renderCategory = (goals: string[], categoryName: string, bgColor: string) => (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg text-primary">{categoryName}</h4>
      {goals.map((goal, index) => (
        <div 
          key={index}
          className={`p-4 ${bgColor} rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="h-2 w-2 bg-primary rounded-full"></div>
          <p className="text-primary">{goal}</p>
        </div>
      ))}
    </div>
  );

  const renderSection = (section: CategoryGoals, bgColors: Record<string, string>) => (
    <div className="space-y-6">
      {renderCategory(section.education, "Education", bgColors.education)}
      {renderCategory(section.professional, "Professional", bgColors.professional)}
      {renderCategory(section.travel, "Travel", bgColors.travel)}
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">✅</span> Completed Goals
        </h3>
        {renderSection(completed, {
          education: "bg-accent1/20",
          professional: "bg-accent1/20",
          travel: "bg-accent1/20"
        })}
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
        style={{ animationDelay: '200ms' }}
      >
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">🚀</span> In Progress
        </h3>
        {renderSection(inProgress, {
          education: "bg-accent2/20",
          professional: "bg-accent2/20",
          travel: "bg-accent2/20"
        })}
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
        style={{ animationDelay: '400ms' }}
      >
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">🎯</span> Future Goals
        </h3>
        {renderSection(future, {
          education: "bg-primary/5",
          professional: "bg-primary/5",
          travel: "bg-primary/5"
        })}
      </div>
    </div>
  );
};

export default ImpossibleList;