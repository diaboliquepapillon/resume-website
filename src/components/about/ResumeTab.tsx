import React from 'react';
import { FileText, Download, ExternalLink, Mail, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1y4FJLxDArpx8AMthTN6VoGL4vRtICUK3/view?usp=sharing";

const ResumeTab = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary animate-fade-in">Resume</h2>
        <div className="flex gap-4">
          <Button
            onClick={() => window.open(RESUME_URL, '_blank')}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            <ExternalLink className="w-4 h-4" />
            View PDF
          </Button>
          <Button
            onClick={() => window.open(RESUME_URL, '_blank')}
            className="flex items-center gap-2 bg-accent1 hover:bg-accent1/90"
          >
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-primary/20">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Aylin Vahabova</h1>
          <div className="flex justify-center gap-6 text-primary/80">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              aylin.vahabova@monash.edu
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Melbourne, Australia
            </span>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Professional Summary
          </h3>
          <p className="text-primary/80">
            Data Science student at Monash University with experience in data analysis, 
            machine learning, and software development. Proven track record in applying 
            analytical skills to real-world problems through internships and academic projects.
          </p>
        </div>

        {/* Preview Note */}
        <div className="text-center mt-8 p-4 bg-accent2/10 rounded-lg">
          <p className="text-primary/80">
            This is a preview of my resume. For the full detailed version, please click the View PDF or Download buttons above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTab;