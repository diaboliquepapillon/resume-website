import React from 'react';
import Room from './Room';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center">
      <Room />
      <div className="text-center mt-8 animate-fade-in">
        <p className="text-xl md:text-2xl">Software Engineer & Designer</p>
      </div>
    </section>
  );
};

export default Hero;