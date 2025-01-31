import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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
      <div className="max-w-3xl mx-auto px-4 text-center animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Get in Touch</h2>
        <p className="text-lg md:text-xl mb-8 text-primary">
          I'm always open to new opportunities and interesting projects.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-block px-8 py-4 border border-primary hover:bg-accent2 hover:text-primary transition-colors duration-300">
              Say Hello
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
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
      </div>
    </section>
  );
};

export default Contact;