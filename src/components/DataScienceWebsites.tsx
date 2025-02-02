import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Globe, Database, ChartBar, Code, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Website {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  skills: string[];
  icon: React.ReactNode;
  image: string;
}

const websites: Website[] = [
  {
    title: "SmartClassify",
    description: "An image classification tool that predicts what uploaded images contain using machine learning.",
    link: "https://smartclassify.netlify.app",
    technologies: [
      "Python (FastAPI/Flask)",
      "TensorFlow/PyTorch",
      "OpenCV & PIL",
      "React/Next.js",
      "AWS/GCP"
    ],
    skills: [
      "Working with CNNs",
      "Image preprocessing",
      "ML model deployment",
      "API development"
    ],
    icon: <Database className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    title: "CineCompass",
    description: "Movie recommendation system that suggests films based on user preferences and similarities.",
    link: "https://cinecompass.netlify.app",
    technologies: [
      "Python (Flask/FastAPI)",
      "Pandas & Scikit-learn",
      "Collaborative Filtering",
      "TMDb API",
      "React.js"
    ],
    skills: [
      "Building recommendation engines",
      "Data manipulation",
      "NLP analysis",
      "AI web app deployment"
    ],
    icon: <ChartBar className="w-8 h-8 text-accent1" />,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "BreatheEasy AI",
    description: "Air quality checker that provides simplified explanations of whether air is safe to breathe.",
    link: "https://breatheeasyai.netlify.app",
    technologies: [
      "Python (Flask/FastAPI)",
      "Air Quality APIs",
      "Machine Learning",
      "React.js",
      "Google Maps API"
    ],
    skills: [
      "Real-time data fetching",
      "Data visualization",
      "Time-series analysis",
      "Scientific communication"
    ],
    icon: <Globe className="w-8 h-8 text-accent2" />,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    title: "VerifyNews",
    description: "Fake news detector that analyzes headlines using Natural Language Processing models.",
    link: "https://verifynews.netlify.app",
    technologies: [
      "Python (Flask/FastAPI)",
      "Hugging Face Transformers",
      "Scikit-learn & NLP",
      "News APIs",
      "React.js"
    ],
    skills: [
      "Text classification",
      "Feature engineering",
      "BERT implementation",
      "AI service deployment"
    ],
    icon: <Code className="w-8 h-8 text-primary" />,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const DataScienceWebsites = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent1/10 data-science-portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="w-8 h-8 text-primary animate-float" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent1 to-accent2 bg-clip-text text-transparent">
              Data Science Portfolio
            </h2>
            <Rocket className="w-8 h-8 text-accent2 animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
            Explore my collection of data science web applications, showcasing practical implementations
            of machine learning, AI, and data analysis.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
            skipSnaps: true,
          }}
          className="w-full max-w-5xl mx-auto touch-pan-y"
        >
          <CarouselContent>
            {websites.map((website, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-2 h-full">
                  <Card className={cn(
                    "border-2 border-primary/20 hover:border-primary/40 transition-all duration-300",
                    "hover:shadow-xl bg-white/95 backdrop-blur-sm h-full flex flex-col"
                  )}>
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={website.image}
                        alt={website.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        {website.icon}
                        <CardTitle className="text-2xl font-bold text-primary">
                          {website.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-primary/70">
                        {website.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-grow">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {website.technologies.slice(0, 3).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-accent1/20 text-primary rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {website.skills.slice(0, 2).map((skill, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-accent2/20 text-primary rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        asChild
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <a
                          href={website.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2"
                        >
                          <Globe className="w-5 h-5" />
                          Visit Website
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default DataScienceWebsites;
