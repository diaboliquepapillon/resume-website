import React from 'react';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Binary, BrainCircuit, ChartBar, Network } from 'lucide-react';

const generateData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    value: Math.sin(i / 5) * 50 + 50,
    value2: Math.cos(i / 3) * 30 + 50
  }));
};

const data = generateData(20);

const Room = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent1/20 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent2/20 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-[600px] h-[400px] relative">
          {/* Floating icons */}
          <div className="absolute -left-8 top-1/4 animate-float" style={{ animationDelay: '0.2s' }}>
            <BrainCircuit className="w-12 h-12 text-primary/80" />
          </div>
          <div className="absolute -right-8 top-1/3 animate-float" style={{ animationDelay: '0.7s' }}>
            <Network className="w-12 h-12 text-primary/80" />
          </div>
          <div className="absolute left-1/4 -top-8 animate-float" style={{ animationDelay: '1.2s' }}>
            <Binary className="w-12 h-12 text-primary/80" />
          </div>
          <div className="absolute right-1/4 -bottom-8 animate-float" style={{ animationDelay: '1.5s' }}>
            <ChartBar className="w-12 h-12 text-primary/80" />
          </div>

          {/* Main chart */}
          <div className="absolute inset-0 animate-fade-in">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26574a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#26574a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#26574a" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Secondary chart */}
          <div className="absolute inset-0 transform translate-y-[100px] opacity-50">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#26574a" 
                  strokeWidth={1.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Floating data points */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
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