import React from 'react';
import { GraduationCap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

interface EducationDialogProps {
  education: Education[];
}

const EducationDialog: React.FC<EducationDialogProps> = ({ education }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent1/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
          <GraduationCap className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
          <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
          <p className="text-primary/80">Click to view educational background</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">Education Journey</DialogTitle>
          <DialogDescription>
            <div className="mt-6 space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl text-primary">{edu.degree}</h4>
                      <p className="text-primary/90 font-medium">{edu.institution}</p>
                      <p className="text-primary/80">{edu.year}</p>
                      <p className="text-primary mt-2 leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EducationDialog;