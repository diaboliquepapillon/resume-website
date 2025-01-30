import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Binary } from 'lucide-react';

const data = [
  { value: 30 },
  { value: 60 },
  { value: 20 },
  { value: 80 },
  { value: 40 },
  { value: 90 },
  { value: 50 }
];

const Room = () => {
  return (
    <div className="relative w-full h-[500px] perspective-[1000px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 relative transform-style-preserve-3d animate-room-spin">
          {/* Front wall - Chart */}
          <div className="absolute w-full h-full bg-black/5 border-2 border-black transform translate-z-[128px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Back wall - Binary */}
          <div className="absolute w-full h-full bg-black/5 border-2 border-black transform -translate-z-[128px] flex items-center justify-center">
            <Binary className="w-16 h-16 animate-float" />
          </div>
          
          {/* Right wall - Numbers */}
          <div className="absolute w-[256px] h-full bg-black/5 border-2 border-black transform rotate-y-90 translate-x-[128px] flex items-center justify-center overflow-hidden">
            <div className="text-xl font-mono animate-float opacity-50">
              01001110 10101010
            </div>
          </div>
          
          {/* Left wall - Formula */}
          <div className="absolute w-[256px] h-full bg-black/5 border-2 border-black transform rotate-y-90 -translate-x-[128px] flex items-center justify-center">
            <div className="text-xl font-mono animate-float opacity-50">
              y = mx + b
            </div>
          </div>
          
          {/* Top wall - Matrix */}
          <div className="absolute w-full h-[256px] bg-black/5 border-2 border-black transform rotate-x-90 translate-y-[-128px] flex items-center justify-center">
            <div className="font-mono text-sm animate-float opacity-50">
              [1 0 1]
              [0 1 0]
              [1 0 1]
            </div>
          </div>
          
          {/* Bottom wall */}
          <div className="absolute w-full h-[256px] bg-black/5 border-2 border-black transform rotate-x-90 translate-y-[128px]" />
          
          {/* Floating text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-black animate-float">Data Science</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;