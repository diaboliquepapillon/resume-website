import React from 'react';
import { Heart, Star, Coffee, Music, Gamepad, Camera } from 'lucide-react';

const InterestsSection = () => {
  const createFloatingEmoji = (emoji: string, index: number, x: number) => {
    const span = document.createElement("span");
    span.innerText = emoji;
    span.style.position = "fixed";
    span.style.left = `${x}px`;
    span.style.top = "50%";
    span.style.transform = "translate(-50%, -50%)";
    span.style.fontSize = "24px";
    span.style.pointerEvents = "none";
    span.style.animation = "float-up 2s ease-out forwards";
    span.style.opacity = "1";
    span.style.zIndex = "50";
    
    document.body.appendChild(span);
    
    setTimeout(() => span.remove(), 2000);
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        0% {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -200%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const interests = [
    { name: "Reading", icon: Coffee, emojis: ["📚", "🤓", "💡", "📖"] },
    { name: "Music", icon: Music, emojis: ["🎵", "🎼", "🎹", "🎸"] },
    { name: "Gaming", icon: Gamepad, emojis: ["🎮", "🕹️", "🎲", "🏆"] },
    { name: "Photography", icon: Camera, emojis: ["📸", "🌅", "🎨", "✨"] },
    { name: "Traveling", icon: Star, emojis: ["✈️", "🌎", "🧳", "🗺️"] },
    { name: "Cooking", icon: Heart, emojis: ["👨‍🍳", "🍳", "🥘", "🍽️"] },
  ];

  const handleInterestClick = (emojis: string[], event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    
    emojis.forEach((emoji, index) => {
      const offsetX = centerX + (Math.random() - 0.5) * 100;
      setTimeout(() => createFloatingEmoji(emoji, index, offsetX), index * 200);
    });
  };

  return (
    <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-accent1/10 via-white to-accent2/10 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2">
        <Heart className="w-6 h-6 text-primary animate-pulse" />
        Interests
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {interests.map((interest, index) => {
          const Icon = interest.icon;
          return (
            <div
              key={interest.name}
              onClick={(e) => handleInterestClick(interest.emojis, e)}
              className="group flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon className="w-6 h-6 text-accent1 group-hover:animate-bounce" />
              <span className="text-primary font-medium">{interest.name}</span>
            </div>
          )}
        )}
      </div>
    </div>
  );
};

export default InterestsSection;