import { useEffect, useState, useCallback } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
    id: "pokemon",
    title: "pokemon",
    description: "pokemon",
    image: "images/PokemonGame.webp",
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "Game Logic",
      "API Integration",
      "Responsive Design",
    ],
    liveUrl: "https://pro-boost.github.io/Memory_card/",
    githubUrl: "https://github.com/pro-boost/Memory_card",
  },
  {
    id: "shopping",
    title: "shopping",
    description: "shopping",
    image: "images/ShopingCart.webp",
    tags: [
      "React",
      "React Router",
      "React Context",
      "API Integration",
      "Responsive Design",
    ],
    liveUrl: "https://pro-boost.github.io/Shoping-cart/",
    githubUrl: "https://github.com/pro-boost/Shoping-cart",
  },
  {
    id: "resume",
    title: "resume",
    description: "resume",
    image: "images/CV.webp",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Light/Dark Themes",
    ],
    liveUrl: "https://pro-boost.github.io/CV/",
    githubUrl: "https://github.com/pro-boost/CV",
  },
  {
    id: "military",
    title: "military",
    description: "military",
    image: "images/StrikeGear.webp",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "React Router",
      "Responsive design",
      "Emailjs",
    ],
    liveUrl: "#",
    githubUrl: "#",
    isComingSoon: true,
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

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

  const getProjectIndex = useCallback(
    (index: number) => {
      return (index + projects.length) % projects.length;
    },
    [projects.length]
  );

  const nextProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => getProjectIndex(prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, getProjectIndex]);

  const prevProject = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => getProjectIndex(prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, getProjectIndex]);

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
    <section id="projects" className="pt-24 pb-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>
        {isMobile ? (
          // Mobile view - Carousel
          <div className="max-w-md mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <div className="relative bg-card border border-border/100 rounded-xl overflow-hidden transition-all">
                      {project.isComingSoon && (
                        <div className="absolute top-4 right-4 z-20 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {t("projects.comingSoon")}
                        </div>
                      )}
                      <div
                        className={cn(
                          "h-48 overflow-hidden",
                          project.isComingSoon && "blur-sm"
                        )}
                      >
                        <img
                          src={project.image}
                          alt={t(`projects.items.${project.id}.title`)}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 text-primary">
                          {t(`projects.items.${project.id}.title`)}
                        </h3>
                        <div className={cn(project.isComingSoon && "blur-sm")}>
                          <p className="text-sm text-foreground/70 mb-4">
                            {t(`projects.items.${project.id}.description`)}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="text-xs"
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />{" "}
                                {t("projects.tags.live")}
                              </a>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              size="sm"
                              className="text-xs"
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-1" />{" "}
                                {t("projects.tags.code")}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 md:transform-none h-8 w-8 rounded-full" />
                <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 md:transform-none h-8 w-8 rounded-full" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="relative w-[85%] md:w-[60%] lg:w-[50%] mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground/60 group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground/60 group-hover:text-primary transition-colors" />
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
                          {t("projects.comingSoon")}
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
                          alt={t(`projects.items.${project.id}.title`)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors relative z-10">
                          {t(`projects.items.${project.id}.title`)}
                        </h3>
                        <div className={cn(project.isComingSoon && "blur-sm")}>
                          <p className="text-sm md:text-base text-foreground/70 mb-4">
                            {t(`projects.items.${project.id}.description`)}
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
                                {t("projects.tags.live")}
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
                                {t("projects.tags.code")}
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
              {t("projects.projectCounter", {
                current: currentIndex + 1,
                total: projects.length,
              })}
            </div>
          </div>
        )}
        <div className="text-center mt-8 md:mt-12">
          <Button asChild variant="default" size="lg" className="rounded-full">
            <a
              href="https://github.com/pro-boost/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.viewMore")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
