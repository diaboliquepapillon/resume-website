import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { BrainCircuit, Network, Database, LineChart, Binary, Cpu } from 'lucide-react';

const data = [
  { value: 30, value2: 10 },
  { value: 40, value2: 30 },
  { value: 35, value2: 20 },
  { value: 50, value2: 40 },
  { value: 45, value2: 30 },
  { value: 60, value2: 50 },
];

const Room = () => {
  return (
    <div className="w-full h-full perspective-[1000px]">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent1/20 via-transparent to-accent2/20 animate-pulse" 
           style={{ animationDuration: '4s' }} />

      {/* Main content container with enhanced 3D effect */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8 transform-style-preserve-3d">
        <div className="w-full h-full relative">
          {/* Static positioned labels with fade-in animation */}
          {[
            { Icon: BrainCircuit, label: 'AI', position: '-left-4 top-1/4', delay: '0.2s', color: 'accent1' },
            { Icon: Network, label: 'Neural Networks', position: '-right-4 top-1/3', delay: '0.4s', color: 'accent2' },
            { Icon: Database, label: 'Big Data', position: 'left-1/4 -bottom-4', delay: '0.6s', color: 'accent1' },
            { Icon: LineChart, label: 'Analytics', position: 'right-1/4 -top-4', delay: '0.8s', color: 'accent2' },
            { Icon: Binary, label: 'Deep Learning', position: 'left-1/3 -top-4', delay: '1s', color: 'accent1' },
            { Icon: Cpu, label: 'Machine Learning', position: 'right-1/3 -bottom-4', delay: '1.2s', color: 'accent2' },
          ].map(({ Icon, label, position, delay, color }) => (
            <div 
              key={label}
              className={`absolute ${position} opacity-0 flex items-center gap-2 bg-white/90 p-3 rounded-xl shadow-lg backdrop-blur-sm border border-${color} transform hover:scale-105 transition-transform duration-300`}
              style={{ 
                animation: 'fade-in 1.2s ease-out forwards',
                animationDelay: delay,
                animationFillMode: 'forwards'
              }}
            >
              <Icon className={`w-5 h-5 text-${color}`} />
              <span className="text-sm font-medium text-primary">{label}</span>
            </div>
          ))}

          {/* Enhanced main chart with smooth animation */}
          <div className="absolute inset-0 opacity-0" 
               style={{ 
                 animation: 'fade-in 1.5s ease-out forwards',
                 animationDelay: '0.3s'
               }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f1c2dc" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f1c2dc" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cdd673" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#cdd673" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#f1c2dc" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={2000}
                  animationEasing="ease"
                />
                <Area 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#cdd673" 
                  fillOpacity={1} 
                  fill="url(#colorValue2)" 
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationBegin={500}
                  animationDuration={2000}
                  animationEasing="ease"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Subtle floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: 'pulse 4s ease-in-out infinite',
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `translateZ(${Math.random() * 40}px)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;