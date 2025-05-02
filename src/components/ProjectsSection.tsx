import { useEffect, useState, useCallback } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  isComingSoon?: boolean;
}

const defaultProjects = [
  {
    id: "1",
    title: "Modern E-commerce UI",
    description:
      "A responsive e-commerce interface with advanced filtering, smooth animations, and accessible design patterns. Built with React and TailwindCSS.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Accessibility",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Interactive Dashboard",
    description:
      "A performant analytics dashboard with real-time data visualization, dark mode support, and responsive layouts. Implemented with Next.js and modern CSS techniques.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "TypeScript", "CSS Grid", "D3.js", "Responsive Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Design System & Component Library",
    description:
      "A comprehensive UI component library with accessibility features, theming support, and interactive documentation. Built with React and styled-components.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "Styled Components", "Storybook", "UI/UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "AI-Powered Code Assistant",
    description:
      "An intelligent code assistant that helps developers write better code, with real-time suggestions and automated documentation generation.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "TypeScript", "OpenAI", "WebSocket", "Real-time"],
    liveUrl: "#",
    githubUrl: "#",
    isComingSoon: true,
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem("portfolio-projects");
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (error) {
        console.error("Error loading projects from localStorage:", error);
      }
    }
  }, []);

  const getProjectIndex = (index: number) => {
    return (index + projects.length) % projects.length;
  };

  const nextProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => getProjectIndex(prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const prevProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => getProjectIndex(prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, [nextProject]);

  const getProjectClass = (index: number) => {
    const position = (index - currentIndex + projects.length) % projects.length;

    if (position === 0) return "carousel-item-center";
    if (position === 1) return "carousel-item-right";
    if (position === projects.length - 1) return "carousel-item-left";
    return "carousel-item-hidden";
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents different
            challenges and solutions using various technologies.
          </p>
        </div>

        <div className="relative w-[90%] md:w-[70%] lg:w-[60%] mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Carousel Container */}
          <div className="relative h-[500px] md:h-[600px] overflow-visible perspective-1000">
            <div className="carousel-container">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={cn("carousel-item", getProjectClass(index))}
                >
                  <div
                    className={cn(
                      "group bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-lg h-full max-w-[400px] mx-auto",
                      "animated-border"
                    )}
                  >
                    {project.isComingSoon && (
                      <div className="absolute top-4 right-4 z-20 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                      </div>
                    )}
                    <div
                      className={cn(
                        "h-48 sm:h-56 md:h-64 overflow-hidden",
                        project.isComingSoon && "blur-sm"
                      )}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">
                        {project.title}
                      </h3>
                      <div className={cn(project.isComingSoon && "blur-sm")}>
                        <p className="text-sm md:text-base text-foreground/70 mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                          {project.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2 py-0.5 md:px-3 md:py-1 bg-secondary rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3 md:gap-4">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="text-xs md:text-sm"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 md:gap-2"
                            >
                              <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="text-xs md:text-sm"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 md:gap-2"
                            >
                              <Github className="h-3.5 w-3.5 md:h-4 md:w-4" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 md:mt-6 text-xs md:text-sm text-foreground/60">
            Project {currentIndex + 1} of {projects.length}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button asChild variant="default" size="lg" className="rounded-full">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
