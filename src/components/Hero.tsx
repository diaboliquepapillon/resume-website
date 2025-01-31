import React from 'react';
import Room from './Room';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">Aylin Vahabova</h1>
        <p className="text-xl md:text-2xl text-primary">Data Scientist | Monash University</p>
      </div>
      <Room />
    </section>
  );
};

export default Hero;