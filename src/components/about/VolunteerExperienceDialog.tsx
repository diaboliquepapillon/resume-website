
import React from 'react';
import { Heart } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface VolunteerExperience {
  title: string;
  organization: string;
  period: string;
  description: string[];
}

interface VolunteerExperienceDialogProps {
  volunteerExperience: VolunteerExperience[];
}

const VolunteerExperienceDialog: React.FC<VolunteerExperienceDialogProps> = ({ volunteerExperience }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent1/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
          <Heart className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
          <h3 className="text-xl font-bold mb-2 text-primary">Volunteer Experience</h3>
          <p className="text-primary/80">Click to view volunteer work</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">Volunteer Experience</DialogTitle>
          <DialogDescription>
            <div className="mt-6 space-y-6">
              {volunteerExperience.map((volunteer, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                      <Heart className="w-6 h-6" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="font-bold text-xl text-primary">{volunteer.title}</h4>
                      <p className="text-primary/90 font-medium">{volunteer.organization}</p>
                      <p className="text-primary/80">{volunteer.period}</p>
                      <ul className="list-disc ml-4 space-y-1">
                        {volunteer.description.map((desc, idx) => (
                          <li key={idx} className="text-primary pl-1 marker:text-primary">
                            <span className="inline-block">{desc}</span>
                          </li>
                        ))}
                      </ul>
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

export default VolunteerExperienceDialog;
