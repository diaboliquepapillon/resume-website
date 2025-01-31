import React from 'react';
import { FileText } from 'lucide-react';

const ResumeTab = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary animate-fade-in">Resume</h2>
      <p className="text-lg mb-8">Download my latest resume to learn more about my experience and skills.</p>
      <a 
        href="/path-to-your-resume.pdf" 
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-300"
      >
        <FileText className="w-5 h-5" />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeTab;