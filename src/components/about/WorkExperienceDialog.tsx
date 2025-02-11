
import React from 'react';
import { Briefcase } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

interface WorkExperienceDialogProps {
  workExperience: WorkExperience[];
}

const WorkExperienceDialog: React.FC<WorkExperienceDialogProps> = ({ workExperience }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent2/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
          <Briefcase className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
          <h3 className="text-xl font-bold mb-2 text-primary">Work Experience</h3>
          <p className="text-primary/80">Click to view work history</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">Professional Experience</DialogTitle>
          <DialogDescription>
            <div className="mt-6 space-y-6">
              {workExperience.map((work, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-accent2/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="font-bold text-xl text-primary">{work.title}</h4>
                      <p className="text-primary/90 font-medium">{work.company}</p>
                      <p className="text-primary/80">{work.period}</p>
                      <ul className="list-disc space-y-1 ml-5">
                        {work.description.map((desc, idx) => (
                          <li key={idx} className="text-primary marker:text-primary">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <h5 className="font-semibold text-primary mb-2">Key Skills:</h5>
                        <div className="flex flex-wrap gap-2">
                          {work.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-accent1/20 text-primary rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default WorkExperienceDialog;
