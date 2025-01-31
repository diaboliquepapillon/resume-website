import React from 'react';
import { Heart } from 'lucide-react';

const InterestsSection = () => {
  return (
    <div className="mt-8 bg-white p-8 rounded-xl border-2 border-primary/20 shadow-lg animate-fade-in hover:border-primary/40 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
        <Heart className="w-6 h-6 text-primary" />
        Interests
      </h3>
      <div className="flex flex-wrap gap-4">
        <div 
          className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={() => {
            const emojis = ["✈️", "🌎", "🧳", "🗺️"];
            emojis.forEach((emoji, index) => {
              const span = document.createElement("span");
              span.innerText = emoji;
              span.className = "absolute animate-float pointer-events-none";
              span.style.left = `${Math.random() * 100}%`;
              span.style.animationDelay = `${index * 0.2}s`;
              document.body.appendChild(span);
              setTimeout(() => span.remove(), 3000);
            });
          }}
        >
          Traveling
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={() => {
            const emojis = ["⚽", "🥅", "🏃‍♂️", "🎯"];
            emojis.forEach((emoji, index) => {
              const span = document.createElement("span");
              span.innerText = emoji;
              span.className = "absolute animate-float pointer-events-none";
              span.style.left = `${Math.random() * 100}%`;
              span.style.animationDelay = `${index * 0.2}s`;
              document.body.appendChild(span);
              setTimeout(() => span.remove(), 3000);
            });
          }}
        >
          Soccer
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent2 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={() => {
            const emojis = ["🎬", "🍿", "📽️", "⭐"];
            emojis.forEach((emoji, index) => {
              const span = document.createElement("span");
              span.innerText = emoji;
              span.className = "absolute animate-float pointer-events-none";
              span.style.left = `${Math.random() * 100}%`;
              span.style.animationDelay = `${index * 0.2}s`;
              document.body.appendChild(span);
              setTimeout(() => span.remove(), 3000);
            });
          }}
        >
          Movie reviewing
        </div>
        <div 
          className="group relative px-4 py-2 bg-accent1 text-primary font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-md cursor-pointer"
          onClick={() => {
            const emojis = ["🧁", "🥖", "🎂", "👨‍🍳"];
            emojis.forEach((emoji, index) => {
              const span = document.createElement("span");
              span.innerText = emoji;
              span.className = "absolute animate-float pointer-events-none";
              span.style.left = `${Math.random() * 100}%`;
              span.style.animationDelay = `${index * 0.2}s`;
              document.body.appendChild(span);
              setTimeout(() => span.remove(), 3000);
            });
          }}
        >
          Baking
        </div>
      </div>
    </div>
  );
};

export default InterestsSection;