import React from 'react';
import Room from './Room';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      <div className="text-center mb-12 animate-fade-in max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary tracking-tight">
          Aylin Vahabova
        </h1>
        <p className="text-xl md:text-2xl text-primary/80 leading-relaxed">
          Data Scientist | Monash University
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <Room />
      </div>
    </section>
  );
};

export default Hero;