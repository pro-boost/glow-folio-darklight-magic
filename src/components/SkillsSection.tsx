import { useEffect, useState } from "react";

interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
}

const defaultSkills = [
  { id: "1", name: "React", category: "Frontend", level: 95 },
  { id: "2", name: "TypeScript", category: "Frontend", level: 90 },
  { id: "3", name: "Next.js", category: "Frontend", level: 90 },
  { id: "4", name: "HTML5", category: "Frontend", level: 95 },
  { id: "5", name: "CSS3/SASS", category: "Frontend", level: 95 },
  { id: "6", name: "TailwindCSS", category: "Frontend", level: 95 },
  { id: "7", name: "UI/UX Design", category: "Design", level: 90 },
  { id: "8", name: "Responsive Design", category: "Design", level: 95 },
  { id: "9", name: "Accessibility", category: "Design", level: 90 },
  { id: "10", name: "JavaScript", category: "Frontend", level: 95 },
  { id: "11", name: "Git", category: "Tools", level: 90 },
  { id: "12", name: "Web Performance", category: "Frontend", level: 85 },
];

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Load skills from localStorage if available
    const savedSkills = localStorage.getItem("portfolio-skills");
    if (savedSkills) {
      try {
        const loadedSkills = JSON.parse(savedSkills) as Skill[];
        setSkills(loadedSkills);

        // Extract unique categories with proper typing
        const uniqueCategories = Array.from(
          new Set(loadedSkills.map((skill: Skill) => skill.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error loading skills from localStorage:", error);
      }
    } else {
      // Extract unique categories from default skills
      const uniqueCategories = Array.from(
        new Set(defaultSkills.map((skill) => skill.category))
      );
      setCategories(uniqueCategories);
    }
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow animate-fade-in"
            >
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {skill.category}
              </p>

              <div className="w-full bg-secondary rounded-full h-2.5 mb-1">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
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
      </div>
    </section>
  );
}
