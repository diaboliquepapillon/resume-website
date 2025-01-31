import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4 text-center animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 text-primary">
          I'm always open to new opportunities and interesting projects.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-8 py-4 border border-primary hover:bg-accent2 hover:text-primary transition-colors duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;