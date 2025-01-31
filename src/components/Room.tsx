import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Binary, BrainCircuit, Database, Network, ChartBar } from 'lucide-react';

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
          <div className="absolute w-full h-full bg-accent1/10 border-2 border-primary transform translate-z-[128px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#26574a" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
            <div className="absolute bottom-2 right-2">
              <ChartBar className="w-6 h-6 text-primary animate-bounce" />
            </div>
          </div>
          
          {/* Back wall - Neural Network */}
          <div className="absolute w-full h-full bg-accent2/10 border-2 border-primary transform -translate-z-[128px] flex items-center justify-center">
            <BrainCircuit className="w-16 h-16 animate-float text-primary" />
            <Network className="absolute top-4 right-4 w-8 h-8 text-primary animate-pulse" />
          </div>
          
          {/* Right wall - Binary and Database */}
          <div className="absolute w-[256px] h-full bg-accent1/10 border-2 border-primary transform rotate-y-90 translate-x-[128px] flex flex-col items-center justify-around p-4">
            <Binary className="w-12 h-12 text-primary animate-float" />
            <div className="text-xl font-mono animate-float text-primary opacity-50">
              01001110
            </div>
            <Database className="w-12 h-12 text-primary animate-bounce" />
          </div>
          
          {/* Left wall - Formulas */}
          <div className="absolute w-[256px] h-full bg-accent2/10 border-2 border-primary transform rotate-y-90 -translate-x-[128px] flex flex-col items-center justify-around p-4">
            <div className="text-lg font-mono animate-float text-primary opacity-50">
              y = mx + b
            </div>
            <div className="text-lg font-mono animate-float text-primary opacity-50">
              σ(z) = 1/(1+e⁻ᶻ)
            </div>
            <div className="text-lg font-mono animate-float text-primary opacity-50">
              P(A|B) = P(B|A)P(A)/P(B)
            </div>
          </div>
          
          {/* Top wall - Matrix */}
          <div className="absolute w-full h-[256px] bg-accent1/10 border-2 border-primary transform rotate-x-90 translate-y-[-128px] flex items-center justify-center">
            <div className="font-mono text-sm animate-float text-primary opacity-50 text-center">
              <div>[1 0 1]</div>
              <div>[0 1 0]</div>
              <div>[1 0 1]</div>
            </div>
          </div>
          
          {/* Bottom wall - Scatter Plot Pattern */}
          <div className="absolute w-full h-[256px] bg-accent2/10 border-2 border-primary transform rotate-x-90 translate-y-[128px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          
          {/* Floating text with gradient */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-primary animate-float bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
              Data Science
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;