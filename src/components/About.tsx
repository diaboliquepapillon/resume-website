import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm a software engineer and designer passionate about creating beautiful, functional digital experiences. 
          With expertise in both front-end and back-end development, I bring ideas to life through clean code and 
          thoughtful design.
        </p>
      </div>
    </section>
  );
};

export default About;