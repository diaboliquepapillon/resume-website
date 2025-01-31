import React from 'react';
import { Award } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CertificationsDialogProps {
  certifications: string[];
}

const CertificationsDialog: React.FC<CertificationsDialogProps> = ({ certifications }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="p-8 rounded-xl bg-white shadow-lg border border-primary/20 hover:bg-accent1/20 transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105">
          <Award className="w-8 h-8 mb-4 group-hover:animate-bounce text-primary" />
          <h3 className="text-xl font-bold mb-2 text-primary">Certifications</h3>
          <p className="text-primary/80">Click to view certifications</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-white border-2 border-primary/20 shadow-xl max-w-2xl w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary">Professional Certifications</DialogTitle>
          <DialogDescription>
            <div className="mt-6 space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/90 text-white group-hover:bg-primary transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-primary">{cert}</p>
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

export default CertificationsDialog;