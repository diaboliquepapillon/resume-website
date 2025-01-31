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
  const renderCategory = (goals: string[], categoryName: string, icon: string, bgGradient: string) => (
    <div className="space-y-3">
      <h4 className="font-semibold text-xl text-primary flex items-center gap-2">
        {icon} {categoryName}
      </h4>
      <div className="space-y-2">
        {goals.map((goal, index) => (
          <div 
            key={index}
            className={`p-4 ${bgGradient} rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 animate-fade-in`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-primary/90 font-medium">{goal}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSection = (
    section: CategoryGoals, 
    bgGradients: Record<string, string>, 
    icons: Record<string, string>
  ) => (
    <div className="space-y-8">
      {renderCategory(section.education, "Education", icons.education, bgGradients.education)}
      {renderCategory(section.professional, "Professional", icons.professional, bgGradients.professional)}
      {renderCategory(section.travel, "Travel", icons.travel, bgGradients.travel)}
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="animate-fade-in backdrop-blur-sm bg-white/40 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl">
        <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
          <span className="text-4xl">✅</span> Completed Goals
          <div className="ml-auto">
            <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Achievement Unlocked
            </span>
          </div>
        </h3>
        {renderSection(completed, {
          education: "bg-gradient-to-r from-accent1/20 to-accent1/10",
          professional: "bg-gradient-to-r from-accent1/30 to-accent1/20",
          travel: "bg-gradient-to-r from-accent1/40 to-accent1/30"
        }, {
          education: "📚",
          professional: "💼",
          travel: "✈️"
        })}
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/40 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl" 
        style={{ animationDelay: '200ms' }}
      >
        <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
          <span className="text-4xl">🚀</span> In Progress
          <div className="ml-auto">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full animate-pulse">
              Currently Working On
            </span>
          </div>
        </h3>
        {renderSection(inProgress, {
          education: "bg-gradient-to-r from-accent2/20 to-accent2/10",
          professional: "bg-gradient-to-r from-accent2/30 to-accent2/20",
          travel: "bg-gradient-to-r from-accent2/40 to-accent2/30"
        }, {
          education: "🎓",
          professional: "⚡",
          travel: "🌎"
        })}
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/40 rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-xl" 
        style={{ animationDelay: '400ms' }}
      >
        <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
          <span className="text-4xl">🎯</span> Future Goals
          <div className="ml-auto">
            <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              Dreams & Aspirations
            </span>
          </div>
        </h3>
        {renderSection(future, {
          education: "bg-gradient-to-r from-primary/10 to-primary/5",
          professional: "bg-gradient-to-r from-primary/20 to-primary/10",
          travel: "bg-gradient-to-r from-primary/30 to-primary/20"
        }, {
          education: "🔬",
          professional: "🌟",
          travel: "🗺️"
        })}
      </div>
    </div>
  );
};

export default ImpossibleList;