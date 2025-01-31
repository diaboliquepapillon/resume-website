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
import { ScrollArea } from "@/components/ui/scroll-area";

interface CertificationsDialogProps {
  certifications: string[];
}

const getCertificationLogo = (cert: string): string => {
  if (cert.includes('Atlassian')) return 'https://cdn.worldvectorlogo.com/logos/atlassian-1.svg';
  if (cert.includes('LinkedIn')) return 'https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg';
  if (cert.includes('Microsoft')) return 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg';
  if (cert.includes('ServiceNow')) return '/lovable-uploads/c7e957e9-0bb3-4639-8049-8cce2b133a6d.png';
  if (cert.includes('Hootsuite')) return 'https://cdn.worldvectorlogo.com/logos/hootsuite-1.svg';
  if (cert.includes('Dataiku')) return '/lovable-uploads/742741e3-b74c-4d42-a952-ebd21a1930b2.png';
  if (cert.includes('Negotiation')) return '/lovable-uploads/449da29e-4dfe-4392-931f-61e1323c9329.png';
  return 'https://via.placeholder.com/50';
};

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
            <ScrollArea className="h-[60vh] mt-6 pr-4">
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-accent1/10 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={getCertificationLogo(cert)} 
                          alt={`${cert} logo`}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/50';
                          }}
                        />
                      </div>
                      <div className="space-y-2 flex-grow">
                        <p className="text-lg font-medium text-primary">{cert}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationsDialog;