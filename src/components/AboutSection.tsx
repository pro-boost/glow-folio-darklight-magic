
import { Code, Globe, Server } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", 
  "React", "Next.js", "Node.js", "Express",
  "TailwindCSS", "MongoDB", "PostgreSQL", "Git"
];

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description: "I build responsive, interactive user interfaces with modern frameworks like React and Next.js."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "I create robust server-side applications with Node.js, Express, and various databases."
  },
  {
    icon: Code,
    title: "Full Stack Solutions",
    description: "I deliver end-to-end web applications with seamless integration between frontend and backend."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            I'm a passionate web developer with 5+ years of experience building modern, 
            responsive web applications. I specialize in JavaScript technologies 
            and enjoy creating seamless user experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-gradient-card border border-border/50 overflow-hidden transition-all hover:shadow-md hover:border-primary/50",
                "hover:-translate-y-1 duration-300 animate-scale-in",
                index === 1 ? "delay-200" : index === 2 ? "delay-400" : ""
              )}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I started my web development journey in 2018, after graduating with a Computer Science degree. 
              What began as curiosity quickly turned into a passion for creating beautiful, functional web experiences.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Over the years, I've worked with startups and established companies alike, 
              helping them bring their digital products to life. My focus is always on writing clean, 
              maintainable code that delivers exceptional user experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing my knowledge through blog posts and community events.
            </p>
          </div>
          
          <div className="animate-fade-in delay-200">
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
