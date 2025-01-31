import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ResumeTab = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-primary">Resume</h2>
      
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
          href="https://drive.google.com/file/d/1Hs-Hy5Fy_CtXkf_Yc-cL_FSzGOj_PMVZ/view?usp=sharing"
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