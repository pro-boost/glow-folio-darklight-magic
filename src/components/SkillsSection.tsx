import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const defaultSkills = [
  { id: "1", name: "React", category: "Frontend", level: 95 },
  { id: "7", name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { id: "4", name: "HTML5", category: "Frontend", level: 95 },
  { id: "5", name: "CSS3/SASS", category: "Frontend", level: 95 },
  { id: "6", name: "TailwindCSS", category: "Frontend", level: 95 },
  { id: "9", name: "Responsive Design", category: "Design", level: 95 },
  { id: "2", name: "TypeScript", category: "Frontend", level: 90 },
  { id: "8", name: "Redux/State Management", category: "Frontend", level: 90 },
  { id: "15", name: "RESTful APIs", category: "Frontend", level: 90 },
  { id: "10", name: "UI/UX Design", category: "Design", level: 90 },
  { id: "11", name: "Web Accessibility", category: "Design", level: 90 },
  { id: "12", name: "Git/GitHub", category: "Tools", level: 90 },
  {
    id: "14",
    name: "Testing (Jest/React Testing Library)",
    category: "Frontend",
    level: 85,
  },
  { id: "13", name: "Web Performance", category: "Frontend", level: 85 },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [skillsPerPage, setSkillsPerPage] = useState(6);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  useEffect(() => {
    const savedSkills = localStorage.getItem("portfolio-skills");
    if (savedSkills) {
      try {
        const loadedSkills = JSON.parse(savedSkills) as Skill[];
        setSkills(loadedSkills);
        const uniqueCategories = Array.from(
          new Set(loadedSkills.map((skill: Skill) => skill.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error loading skills from localStorage:", error);
      }
    } else {
      const uniqueCategories = Array.from(
        new Set(defaultSkills.map((skill) => skill.category))
      );
      setCategories(uniqueCategories);
    }
  }, []);

  useEffect(() => {
    const updateSkillsPerPage = () => {
      if (window.innerWidth < 640) {
        setSkillsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setSkillsPerPage(4);
      } else {
        setSkillsPerPage(6);
      }
    };

    updateSkillsPerPage();
    window.addEventListener("resize", updateSkillsPerPage);
    return () => window.removeEventListener("resize", updateSkillsPerPage);
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);

  const nextSkills = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection(null);
    }, 500);
  }, [isAnimating, totalPages]);

  const prevSkills = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => {
      setIsAnimating(false);
      setSlideDirection(null);
    }, 500);
  }, [isAnimating, totalPages]);

  useEffect(() => {
    setCurrentIndex(0);
    setSlideDirection(null);
  }, [activeCategory]);

  // Get the current and next/previous set of skills
  const getVisibleSkills = () => {
    const currentSkills = filteredSkills.slice(
      currentIndex * skillsPerPage,
      (currentIndex + 1) * skillsPerPage
    );

    const nextIndex = (currentIndex + 1) % totalPages;
    const nextSkills = filteredSkills.slice(
      nextIndex * skillsPerPage,
      (nextIndex + 1) * skillsPerPage
    );

    const prevIndex = (currentIndex - 1 + totalPages) % totalPages;
    const prevSkills = filteredSkills.slice(
      prevIndex * skillsPerPage,
      (prevIndex + 1) * skillsPerPage
    );

    return { currentSkills, nextSkills, prevSkills };
  };

  const {
    currentSkills,
    nextSkills: nextSet,
    prevSkills: prevSet,
  } = getVisibleSkills();

  return (
    <section
      id="skills"
      className="py-12 min-h-screen flex items-center bg-gradient-to-b from-background via-secondary/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Here are the technologies and tools I specialize in.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSkills}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="Previous skills"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground/60 group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={nextSkills}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 md:p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
                aria-label="Next skills"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground/60 group-hover:text-primary transition-colors" />
              </button>
            </>
          )}

          {/* Skills Grid with Animation */}
          <div className="relative overflow-hidden">
            <div className="relative">
              {/* Current Skills */}
              <div
                className={cn(
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out",
                  slideDirection === "left" && "animate-slide-out-left",
                  slideDirection === "right" && "animate-slide-out-right"
                )}
              >
                {currentSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {skill.category}
                    </p>
                    <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next/Previous Skills */}
              {(slideDirection === "left" || slideDirection === "right") && (
                <div
                  className={cn(
                    "absolute top-0 left-0 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    slideDirection === "left" && "animate-slide-in-left",
                    slideDirection === "right" && "animate-slide-in-right"
                  )}
                >
                  {(slideDirection === "left" ? nextSet : prevSet).map(
                    (skill) => (
                      <div
                        key={skill.id}
                        className="bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {skill.category}
                        </p>
                        <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                          <div
                            className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
