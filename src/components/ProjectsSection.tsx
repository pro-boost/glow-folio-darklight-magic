
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Personal Finance Dashboard",
    description: "An interactive dashboard for tracking expenses, investments, and financial goals.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Chart.js", "Firebase", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents different challenges and 
            solutions using various technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "group bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-lg animate-scale-in",
                index === 1 ? "delay-200" : index === 2 ? "delay-400" : "",
                "animated-border"
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="default" size="lg" className="rounded-full">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
