import React from 'react';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';
import { Binary, BrainCircuit, Network, Code, Database, LineChart as LineChartIcon, Sparkles, Stars, Cpu } from 'lucide-react';

const generateData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    name: `Point ${i + 1}`,
    value: Math.sin(i / 5) * 50 + 50 + Math.random() * 10,
    value2: Math.cos(i / 3) * 30 + 50 + Math.random() * 8,
    value3: Math.sin(i / 4) * 40 + 60 + Math.random() * 12
  }));
};

const data = generateData(30);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 p-3 rounded-lg shadow-lg border border-primary/20 backdrop-blur-sm">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-primary/80 font-medium">
              {Math.round(entry.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const Room = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-sm shadow-xl transform perspective-[1000px] hover:rotate-y-2 transition-transform duration-500">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent1/30 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent2/30 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '6s' }} />
      </div>

      {/* Main content container with enhanced 3D effect */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-8 transform-style-preserve-3d">
        <div className="w-full h-full relative">
          {/* Static positioned labels with fade-in animation */}
          {[
            { Icon: BrainCircuit, label: 'AI', position: '-left-4 top-1/4', delay: '0.2s', color: 'accent1' },
            { Icon: Network, label: 'Neural Networks', position: '-right-4 top-1/3', delay: '0.4s', color: 'accent2' },
            { Icon: Database, label: 'Big Data', position: 'left-1/4 -top-4', delay: '0.6s', color: 'primary' },
            { Icon: Code, label: 'ML Models', position: 'right-1/4 -bottom-4', delay: '0.8s', color: 'accent1' },
            { Icon: LineChartIcon, label: 'Analytics', position: 'left-1/3 bottom-0', delay: '1s', color: 'accent2' },
            { Icon: Cpu, label: 'Deep Learning', position: 'right-1/3 top-0', delay: '1.2s', color: 'primary' }
          ].map(({ Icon, label, position, delay, color }) => (
            <div 
              key={label}
              className={`absolute ${position} opacity-0 flex items-center gap-2 bg-white/90 p-3 rounded-xl shadow-lg backdrop-blur-sm border border-${color} transform hover:scale-110 transition-all duration-300`}
              style={{ 
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: delay,
                animationFillMode: 'forwards'
              }}
            >
              <Icon className={`w-5 h-5 text-${color}`} />
              <span className="text-sm font-medium text-primary">{label}</span>
            </div>
          ))}

          {/* Enhanced main chart with smooth animation */}
          <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26574a" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#26574a" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f1c2dc" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f1c2dc" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorValue3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#cdd673" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#cdd673" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  hide={true}
                />
                <YAxis hide={true} />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ stroke: '#26574a', strokeWidth: 1, strokeDasharray: '5 5' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#26574a" 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="value2" 
                  stroke="#f1c2dc" 
                  fillOpacity={1} 
                  fill="url(#colorValue2)" 
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="value3" 
                  stroke="#cdd673" 
                  fillOpacity={1} 
                  fill="url(#colorValue3)" 
                  strokeWidth={2}
                  isAnimationActive={true}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Subtle floating particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: 'pulse 3s ease-in-out infinite',
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `translateZ(${Math.random() * 50}px)`
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