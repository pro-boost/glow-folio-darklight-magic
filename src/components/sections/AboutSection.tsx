import { Code, Globe, Server, Palette, Accessibility, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Globe,
    key: "frontend",
  },
  {
    icon: Palette,
    key: "design",
  },
  {
    icon: Zap,
    key: "performance",
  },
];

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            {t("about.subtitle")}
          </h3>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="animate-fade-in">
            <p className="text-lg text-foreground/80 text-justify md:text-center leading-relaxed">
              {t("about.description")}
            </p>
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

                <h3 className="text-xl font-bold mb-3">
                  {t(`about.services.${service.key}.title`)}
                </h3>
                <p className="text-foreground/70">
                  {t(`about.services.${service.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
