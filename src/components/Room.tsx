import React from 'react';
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';
import { Binary, BrainCircuit, Network, Code, Database, LineChartIcon, Sparkles, Stars, Cpu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const generateData = (length: number) => {
  return Array.from({ length }, (_, i) => ({
    name: `Point ${i + 1}`,
    value: Math.sin(i / 5) * 50 + 50 + Math.random() * 10,
    value2: Math.cos(i / 3) * 30 + 50 + Math.random() * 8,
    value3: Math.sin(i / 4) * 40 + 60 + Math.random() * 12,
    value4: Math.cos(i / 6) * 35 + 55 + Math.random() * 15
  }));
};

const data = generateData(30);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 p-2 sm:p-3 rounded-lg shadow-lg border border-primary/20 backdrop-blur-sm animate-scale">
        <div className="text-xs text-primary/60 mb-1 sm:mb-2">Data Point Values</div>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-1 sm:gap-2 animate-fade-in text-xs sm:text-sm" style={{ animationDelay: `${index * 0.1}s` }}>
            <div 
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full animate-pulse" 
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
  const isMobile = useIsMobile();

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-white/50 to-transparent backdrop-blur-sm shadow-xl transform perspective-[1000px] hover:rotate-y-2 transition-transform duration-500">
      {/* Enhanced background gradients with more dynamic animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-accent1/30 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-accent2/30 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '5s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse" 
             style={{ animationDuration: '6s' }} />
      </div>

      {/* Main content container with enhanced 3D effect */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-8 transform-style-preserve-3d">
        <div className="w-full h-full relative">
          {/* Animated labels with hover effects - Hide on mobile */}
          {!isMobile && [
            { Icon: BrainCircuit, label: 'AI', position: '-left-4 top-1/4', delay: '0.2s', color: 'accent1' },
            { Icon: Network, label: 'Neural Networks', position: '-right-4 top-1/3', delay: '0.4s', color: 'accent2' },
            { Icon: Database, label: 'Big Data', position: 'left-1/4 -top-4', delay: '0.6s', color: 'primary' },
            { Icon: Code, label: 'ML Models', position: 'right-1/4 -bottom-4', delay: '0.8s', color: 'accent1' },
            { Icon: LineChartIcon, label: 'Analytics', position: 'left-1/3 bottom-0', delay: '1s', color: 'accent2' },
            { Icon: Cpu, label: 'Deep Learning', position: 'right-1/3 top-0', delay: '1.2s', color: 'primary' }
          ].map(({ Icon, label, position, delay, color }) => (
            <div 
              key={label}
              className={`absolute ${position} opacity-0 flex items-center gap-2 bg-white/90 p-2 sm:p-3 rounded-xl shadow-lg backdrop-blur-sm border border-${color} transform hover:scale-110 transition-all duration-300 cursor-pointer`}
              style={{ 
                animation: 'fade-in 0.8s ease-out forwards',
                animationDelay: delay,
                animationFillMode: 'forwards'
              }}
            >
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${color} animate-bounce`} />
              <span className="text-xs sm:text-sm font-medium text-primary">{label}</span>
            </div>
          ))}

          {/* Enhanced main chart with smooth animations and interactions */}
          <div className="absolute inset-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                  <linearGradient id="colorValue4" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#26574a" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#26574a" stopOpacity={0}/>
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
                  strokeWidth={isMobile ? 1 : 2}
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
                  strokeWidth={isMobile ? 1 : 2}
                  isAnimationActive={true}
                  animationDuration={1800}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="value3" 
                  stroke="#cdd673" 
                  fillOpacity={1} 
                  fill="url(#colorValue3)" 
                  strokeWidth={isMobile ? 1 : 2}
                  isAnimationActive={true}
                  animationDuration={2100}
                  animationEasing="ease-out"
                />
                <Area 
                  type="monotone" 
                  dataKey="value4" 
                  stroke="#26574a" 
                  fillOpacity={0.5} 
                  fill="url(#colorValue4)" 
                  strokeWidth={isMobile ? 0.75 : 1.5}
                  strokeDasharray="5 5"
                  isAnimationActive={true}
                  animationDuration={2400}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Enhanced floating particles with more variety - Reduced on mobile */}
          <div className="absolute inset-0">
            {[...Array(isMobile ? 20 : 40)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 sm:w-${Math.random() > 0.5 ? '2' : '1'} sm:h-${Math.random() > 0.5 ? '2' : '1'} ${
                  Math.random() > 0.7 ? 'bg-accent1' : Math.random() > 0.5 ? 'bg-accent2' : 'bg-primary'
                }/30 rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
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