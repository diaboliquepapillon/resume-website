import React from 'react';

const Room = () => {
  return (
    <div className="relative w-full h-[500px] perspective-[1000px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 relative transform-style-preserve-3d animate-room-spin">
          {/* Front wall */}
          <div className="absolute w-full h-full bg-black/10 border-2 border-black transform translate-z-[128px]" />
          {/* Back wall */}
          <div className="absolute w-full h-full bg-black/10 border-2 border-black transform -translate-z-[128px]" />
          {/* Right wall */}
          <div className="absolute w-[256px] h-full bg-black/10 border-2 border-black transform rotate-y-90 translate-x-[128px]" />
          {/* Left wall */}
          <div className="absolute w-[256px] h-full bg-black/10 border-2 border-black transform rotate-y-90 -translate-x-[128px]" />
          {/* Top wall */}
          <div className="absolute w-full h-[256px] bg-black/10 border-2 border-black transform rotate-x-90 translate-y-[-128px]" />
          {/* Bottom wall */}
          <div className="absolute w-full h-[256px] bg-black/10 border-2 border-black transform rotate-x-90 translate-y-[128px]" />
          
          {/* Floating text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-black animate-float">Fermin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;