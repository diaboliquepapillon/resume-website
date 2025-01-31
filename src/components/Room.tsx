import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Binary, BrainCircuit, Database, Network, ChartBar, GitBranch, Cpu, Workflow } from 'lucide-react';

const data = [
  { value: 30 }, { value: 60 }, { value: 20 }, { value: 80 }, 
  { value: 40 }, { value: 90 }, { value: 50 }, { value: 70 }
];

const Room = () => {
  return (
    <div className="relative w-full h-[500px] perspective-[1000px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 relative transform-style-preserve-3d animate-room-spin">
          {/* Front wall - Neural Network Visualization */}
          <div className="absolute w-full h-full bg-accent1/10 border-2 border-primary transform translate-z-[128px] overflow-hidden">
            <div className="grid grid-cols-3 gap-2 p-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div 
                    className="w-4 h-4 rounded-full bg-primary animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Network className="w-12 h-12 text-primary animate-float" />
            </div>
          </div>
          
          {/* Back wall - Data Flow */}
          <div className="absolute w-full h-full bg-accent2/10 border-2 border-primary transform -translate-z-[128px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#26574a" 
                  strokeWidth={2} 
                  dot={false}
                  className="animate-pulse"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Right wall - AI Processing */}
          <div className="absolute w-[256px] h-full bg-accent1/10 border-2 border-primary transform rotate-y-90 translate-x-[128px]">
            <div className="h-full flex flex-col items-center justify-around p-4">
              <Cpu className="w-8 h-8 text-primary animate-spin-slow" />
              <BrainCircuit className="w-12 h-12 text-primary animate-float" />
              <GitBranch className="w-8 h-8 text-primary animate-pulse" />
            </div>
          </div>
          
          {/* Left wall - Machine Learning Process */}
          <div className="absolute w-[256px] h-full bg-accent2/10 border-2 border-primary transform rotate-y-90 -translate-x-[128px]">
            <div className="h-full flex flex-col items-center justify-around p-4">
              <div className="text-sm font-mono animate-float text-primary opacity-70">
                Training...
              </div>
              <Workflow className="w-12 h-12 text-primary animate-spin-slow" />
              <div className="text-sm font-mono animate-float text-primary opacity-70">
                Optimizing...
              </div>
            </div>
          </div>
          
          {/* Top wall - Binary Data */}
          <div className="absolute w-full h-[256px] bg-accent1/10 border-2 border-primary transform rotate-x-90 translate-y-[-128px]">
            <div className="p-4 grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i}
                  className="text-xs font-mono text-primary animate-pulse text-center"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom wall - Data Processing */}
          <div className="absolute w-full h-[256px] bg-accent2/10 border-2 border-primary transform rotate-x-90 translate-y-[128px]">
            <div className="h-full flex items-center justify-center">
              <Database className="w-12 h-12 text-primary animate-bounce" />
            </div>
          </div>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-primary animate-float bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent">
              AI & ML
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;