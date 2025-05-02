import { Code, Globe, Server, Palette, Accessibility, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3/SASS",
  "TailwindCSS",
  "UI/UX Design",
  "Responsive Design",
  "Accessibility",
  "Web Performance",
  "Git",
];

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
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            I'm a passionate front-end developer with expertise in modern web
            technologies and UI/UX design. I specialize in creating polished,
            accessible, and production-ready web interfaces that deliver
            exceptional user experiences.
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
            <h3 className="text-2xl font-bold mb-6">My Expertise</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              With a strong foundation in front-end development and UI/UX
              principles, I create web applications that are not only visually
              appealing but also highly functional and accessible. My approach
              combines technical excellence with a deep understanding of user
              needs and modern design patterns.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              I have extensive experience with React, Next.js, and TypeScript,
              building complex user interfaces that are both performant and
              maintainable. My work focuses on creating intuitive user
              experiences that follow accessibility standards and best
              practices.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm passionate about staying current with the latest web
              technologies and design trends, continuously improving my skills
              to deliver cutting-edge solutions that meet modern web standards.
            </p>
          </div>

          <div className="animate-fade-in delay-200">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
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
