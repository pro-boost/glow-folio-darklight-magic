import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const defaultSkills = [
  { id: "1", name: "HTML5", category: "frontend", level: 95 },
  { id: "2", name: "CSS3/SASS", category: "frontend", level: 85 },
  { id: "3", name: "JavaScript (ES6+)", category: "frontend", level: 75 },
  { id: "4", name: "TailwindCSS", category: "frontend", level: 95 },
  { id: "5", name: "TypeScript", category: "frontend", level: 70 },
  { id: "6", name: "React", category: "frontend", level: 85 },
  { id: "7", name: "NextJS", category: "frontend", level: 85 },
  { id: "8", name: "Redux/State Management", category: "frontend", level: 70 },
  { id: "9", name: "RESTful APIs", category: "frontend", level: 90 },
  { id: "10", name: "Web Performance", category: "frontend", level: 85 },
  { id: "11", name: "React Testing Library", category: "frontend", level: 75 },
  { id: "12", name: "Responsive Design", category: "design", level: 95 },
  { id: "13", name: "Web Accessibility", category: "design", level: 90 },
  { id: "14", name: "UI/UX Design", category: "design", level: 80 },
  { id: "15", name: "Git/GitHub", category: "tools", level: 70 },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const [skills] = useState<Skill[]>(defaultSkills);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [categories] = useState<string[]>(() =>
    Array.from(new Set(defaultSkills.map((skill) => skill.category)))
  );
  const [skillsPerPage, setSkillsPerPage] = useState(6);

  useEffect(() => {
    const updateSkillsPerPage = () => {
      if (window.innerWidth < 640) {
        setSkillsPerPage(2);
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

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Split skills into groups for carousel
  const skillGroups = [];
  for (let i = 0; i < filteredSkills.length; i += skillsPerPage) {
    skillGroups.push(filteredSkills.slice(i, i + skillsPerPage));
  }

  return (
    <section
      id="skills"
      className="h-screen flex pt-24 pb-12 items-center justify-center bg-gradient-to-b from-background via-secondary/50 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("skills.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-12">
          <button
            onClick={() => handleCategoryChange("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            {t("skills.categories.all")}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              )}
            >
              {t(`skills.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative w-full max-w-6xl mx-auto h-[420px] flex-grow flex flex-col">
          <Carousel className="w-full flex-grow">
            <CarouselContent className="mb-4 sm:mb-12 h-full">
              {skillGroups.map((group, groupIndex) => (
                <CarouselItem key={groupIndex} className="h-full">
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 h-full content-start">
                    {group.map((skill, idx) => (
                      <div
                        key={skill ? skill.id : `empty-${idx}`}
                        className="bg-card p-6 flex flex-col justify-between rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {skill ? (
                          <>
                            <h3 className="text-xl sm:text-lg md:text-xl font-bold mb-2">
                              {skill.name}
                            </h3>
                            <p className="text-sm sm:text-xs text-muted-foreground mb-3">
                              {t(`skills.categories.${skill.category}`)}
                            </p>
                            <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                              <div
                                className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>{t("skills.proficiency")}</span>
                              <span>{skill.level}%</span>
                            </div>
                          </>
                        ) : (
                          <div className="h-full flex items-center justify-center">
                            <p className="text-muted-foreground/50 italic">
                              No skill
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {skillGroups.length > 1 && (
              <div className="pt-4 flex items-center justify-center gap-4 relative z-10">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
