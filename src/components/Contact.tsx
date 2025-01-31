import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, MessageSquare, MapPin, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-background to-accent1/10 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Let's Connect</h2>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto">
            Whether you have a question, opportunity, or just want to say hello - I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <a 
              href="mailto:your.email@example.com" 
              className="group block p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10 hover:border-primary/30"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent1/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Email Me</h3>
                  <p className="text-primary/70 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                    your.email@example.com
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </p>
                </div>
              </div>
            </a>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent2/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Location</h3>
                  <p className="text-primary/70">Melbourne, Australia</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent1/20 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg mb-1">Response Time</h3>
                  <p className="text-primary/70">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full p-6 bg-primary text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-primary/90">
                  <Send className="w-5 h-5" />
                  <span className="text-lg">Send a Message</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-background/95 backdrop-blur-sm border border-primary/20">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">Send a Message</DialogTitle>
                  <DialogDescription className="text-primary/70">
                    I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-primary/20 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message..."
                      className="w-full min-h-[150px] p-3 border border-primary/20 rounded-md focus:border-primary focus:ring-1 focus:ring-primary bg-white/50 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </DialogContent>
            </Dialog>

            <div className="mt-6 p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10">
              <h3 className="font-semibold text-primary text-lg mb-2">Why Contact Me?</h3>
              <ul className="space-y-2 text-primary/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent2"></div>
                  Professional Collaboration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent1"></div>
                  Project Inquiries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent2"></div>
                  Technical Discussions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent1"></div>
                  Networking Opportunities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;