import React from 'react';
import { Heart } from 'lucide-react';

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

  // Add the animation style to the document
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

  const handleInterestClick = (emojis: string[], event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    
    emojis.forEach((emoji, index) => {
      const offsetX = centerX + (Math.random() - 0.5) * 100; // Spread emojis horizontally
      setTimeout(() => createFloatingEmoji(emoji, index, offsetX), index * 200);
    });
  };

  return (
    <div className="mt-8 bg-white p-8 rounded-xl border-2 border-primary/20 shadow-lg animate-fade-in hover:border-primary/40 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <Heart className="w-6 h-6 text-primary" />
        Interests
      </h3>
      <div className="flex flex-wrap gap-4">
        <div 
          className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={(e) => handleInterestClick(["✈️", "🌎", "🧳", "🗺️"], e)}
        >
          Traveling
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={(e) => handleInterestClick(["⚽", "🥅", "🏃‍♂️", "🎯"], e)}
        >
          Soccer
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={(e) => handleInterestClick(["🎬", "🍿", "📽️", "⭐"], e)}
        >
          Movie reviewing
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={(e) => handleInterestClick(["🧁", "🥖", "🎂", "👨‍🍳"], e)}
        >
          Baking
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;