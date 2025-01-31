import React from 'react';

interface ImpossibleListProps {
  completed: string[];
  inProgress: string[];
  future: string[];
}

const ImpossibleList: React.FC<ImpossibleListProps> = ({ completed, inProgress, future }) => {
  return (
    <div className="space-y-12">
      <div className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">✅</span> Completed Goals
        </h3>
        <div className="grid gap-4">
          {completed.map((goal, index) => (
            <div 
              key={index}
              className="p-4 bg-accent1/20 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <p className="text-primary">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
        style={{ animationDelay: '200ms' }}
      >
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">🚀</span> In Progress
        </h3>
        <div className="grid gap-4">
          {inProgress.map((goal, index) => (
            <div 
              key={index}
              className="p-4 bg-accent2/20 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-primary">{goal}</p>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="animate-fade-in backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300" 
        style={{ animationDelay: '400ms' }}
      >
        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span className="text-3xl">🎯</span> Future Goals
        </h3>
        <div className="grid gap-4">
          {future.map((goal, index) => (
            <div 
              key={index}
              className="p-4 bg-primary/5 rounded-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-2 w-2 bg-primary rounded-full group-hover:animate-pulse"></div>
              <p className="text-primary">{goal}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpossibleList;