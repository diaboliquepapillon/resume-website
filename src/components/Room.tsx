import React from 'react';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Binary, BrainCircuit, ChartBar, Network, Code, Database, LineChart as LineChartIcon } from 'lucide-react';

const generateData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    value: Math.sin(i / 5) * 50 + 50,
    value2: Math.cos(i / 3) * 30 + 50,
    value3: Math.sin(i / 4) * 40 + 60
  }));
};

const data = generateData(30);

const Room = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-sm shadow-xl">
      {/* Background gradient circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent1/20 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent2/20 rounded-full filter blur-3xl animate-float" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
        <div className="w-full h-full relative">
          {/* Floating icons with labels */}
          {[
            { Icon: BrainCircuit, label: 'AI', position: '-left-4 top-1/4', delay: '0.2s' },
            { Icon: Network, label: 'Neural Networks', position: '-right-4 top-1/3', delay: '0.4s' },
            { Icon: Database, label: 'Big Data', position: 'left-1/4 -top-4', delay: '0.6s' },
            { Icon: Code, label: 'ML Models', position: 'right-1/4 -bottom-4', delay: '0.8s' },
            { Icon: LineChartIcon, label: 'Analytics', position: 'left-1/3 bottom-0', delay: '1s' },
            { Icon: ChartBar, label: 'Statistics', position: 'right-1/3 top-0', delay: '1.2s' }
          ].map(({ Icon, label, position, delay }) => (
            <div 
              key={label}
              className={`absolute ${position} animate-float flex items-center gap-2 bg-white/80 p-2 rounded-lg shadow-lg backdrop-blur-sm border border-primary/10`}
              style={{ animationDelay: delay }}
            >
              <Icon className="w-5 h-5 text-primary/80" />
              <span className="text-sm font-medium text-primary/80">{label}</span>
            </div>
          ))}

          {/* Main chart */}
          <div className="absolute inset-0 animate-fade-in">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26574a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#26574a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f1c2dc" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f1c2dc" stopOpacity={0}/>
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
                <Area 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#f1c2dc" 
                  fillOpacity={1} 
                  fill="url(#colorValue2)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Floating data points */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
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