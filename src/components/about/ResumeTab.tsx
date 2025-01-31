import React from 'react';
import { FileText, ExternalLink, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1y4FJLxDArpx8AMthTN6VoGL4vRtICUK3/view?usp=sharing";

const ResumeTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary animate-fade-in">Resume</h2>
        <Button
          onClick={() => window.open(RESUME_URL, '_blank')}
          className="flex items-center gap-2 bg-accent1 hover:bg-accent1/90 text-primary font-semibold px-6 py-2 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          Resume
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-semibold text-primary mb-4">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Data Analyst at XYZ Corp (2021 - Present)</li>
          <li>Intern at ABC Inc. (2020 - 2021)</li>
        </ul>
      </div>

      <div className="text-center mt-8 p-4 bg-accent2/10 rounded-lg">
        <p className="text-primary/80">
          This is a preview of my resume. For the full detailed version, please click the Resume button above.
        </p>
      </div>
    </div>
  );
};

export default ResumeTab;
