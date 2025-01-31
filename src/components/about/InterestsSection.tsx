import React from 'react';
import { Heart, Gamepad, Plane, Utensils } from 'lucide-react';

const InterestsSection = () => {
  const interests = [
    { icon: <Gamepad className="w-6 h-6" />, label: "Gaming", color: "bg-accent1/40" },
    { icon: <Plane className="w-6 h-6" />, label: "Traveling", color: "bg-accent2/40" },
    { icon: <Heart className="w-6 h-6" />, label: "Volunteering", color: "bg-accent1/40" },
    { icon: <Utensils className="w-6 h-6" />, label: "Cooking", color: "bg-accent2/40" }
  ];

  return (
    <div className="mt-8 p-8 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-primary/20 shadow-lg transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
        <Heart className="w-6 h-6 text-primary animate-pulse" />
        Fun & Interests
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {interests.map((interest, index) => (
          <div
            key={index}
            className={`${interest.color} p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in flex flex-col items-center gap-2`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-3 bg-white rounded-full shadow-inner">
              {interest.icon}
            </div>
            <span className="font-medium text-primary">{interest.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;