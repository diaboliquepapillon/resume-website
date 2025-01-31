import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, MessageSquare, MapPin, Clock } from 'lucide-react';

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
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="text-lg md:text-xl text-primary">
            I'm always excited to connect, collaborate, and discuss new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center space-x-4 p-4 border border-primary rounded-lg hover:bg-accent1 transition-colors duration-300">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-primary">Email</h3>
                <p className="text-primary">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border border-primary rounded-lg hover:bg-accent2 transition-colors duration-300">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-primary">Location</h3>
                <p className="text-primary">Melbourne, Australia</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border border-primary rounded-lg hover:bg-accent1 transition-colors duration-300">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-primary">Response Time</h3>
                <p className="text-primary">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full p-4 border border-primary hover:bg-accent2 hover:text-primary transition-colors duration-300 rounded-lg flex items-center justify-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Send a Message</DialogTitle>
                  <DialogDescription>
                    Send me a message and I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message..."
                      className="w-full min-h-[100px] p-2 border border-primary rounded-md"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-accent2 text-primary hover:bg-accent1 transition-colors duration-300 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </DialogContent>
            </Dialog>

            <div className="mt-6 p-4 border border-primary rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Preferred Contact Method</h3>
              <p className="text-primary">
                Email is the best way to reach me. I check my inbox regularly and will respond promptly to all inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;