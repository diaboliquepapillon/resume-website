import React from 'react';
import { Mail, MapPin, Phone, Briefcase, GraduationCap, Code, Brain } from 'lucide-react';

const ResumeTab = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary">Resume</h2>
      
      {/* Overview Section */}
      <div className="bg-white/90 p-4 md:p-6 rounded-xl border border-primary/20 shadow-lg mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">Professional Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary/80">
          <div className="flex items-start gap-3">
            <Briefcase className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Experience</h4>
              <p className="text-sm">Data Scientist with expertise in machine learning and analytics</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Education</h4>
              <p className="text-sm">Master of Data Science from Monash University</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Code className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Technical Skills</h4>
              <p className="text-sm">Python, R, SQL, Machine Learning, Deep Learning</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Brain className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
            <div>
              <h4 className="font-medium">Specialization</h4>
              <p className="text-sm">Data Analysis, Statistical Modeling, AI Applications</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-white/90 p-4 md:p-6 rounded-xl border border-primary/20 shadow-lg mb-6 md:mb-8">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-primary">Contact Information</h3>
          <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-6 text-primary/80 text-sm md:text-base">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="break-all">vahabovaylin@gmail.com</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              Melbourne, Australia
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 flex-shrink-0" />
              +61 424 153 964
            </span>
          </div>
        </div>
      </div>

      {/* Resume Download Section */}
      <div className="text-center space-y-4 md:space-y-6">
        <p className="text-sm md:text-base text-primary/80">
          Download my complete resume to learn more about my experience and qualifications.
        </p>
        <a
          href="https://drive.google.com/file/d/1RsVBqnXR4K6sCdRBLa1QtD5M8jlHkfg5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg text-sm md:text-base"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeTab;