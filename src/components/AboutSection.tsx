import { Code, Globe, Server, Palette, Accessibility, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "I specialize in building modern, responsive web applications using React, Next.js, and TypeScript, with a focus on performance and user experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "I create intuitive and beautiful user interfaces, following modern design principles and ensuring accessibility standards are met.",
  },
  {
    icon: Zap,
    title: "Web Performance",
    description:
      "I optimize web applications for speed and efficiency, implementing best practices for loading times and user interaction.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            Frontend Developer & UI/UX Enthusiast
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate front-end developer specializing in creating
              polished, accessible, and production-ready web interfaces. With
              extensive experience in React, Next.js, and TypeScript, I build
              complex user interfaces that are both performant and maintainable.
              My approach combines technical excellence with a deep
              understanding of user needs and modern design patterns. I'm
              committed to creating intuitive user experiences that follow
              accessibility standards and best practices, while staying current
              with the latest web technologies and design trends.
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in delay-200">
            <div className="relative max-w-[300px] mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl transform rotate-12"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl p-1 animated-border">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800"
                  alt="Developer at work"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
