import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center  relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 blob opacity-20 animate-blob"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 blob opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center text-center lg:text-left">
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-center lg:justify-start gap-4  pt-28 lg:pt-0 ">
                <div className="w-3 h-3 rounded-full bg-primary animate-bounce-light"></div>
                <p className="text-lg font-medium text-foreground/80">
                  Hi there, I'm
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Mohamed <span className="text-gradient">B.</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono text-foreground/80">
                Front-End Developer
              </h2>

              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I create stunning, performant websites and web applications with
                modern technologies and a focus on user experience.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#projects">View My Work</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 animate-rotate-in max-w-sm mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl transform rotate-12"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl p-1 animated-border">
                <img
                  src="/images/HeroImg.webp"
                  alt="Dev"
                  className="w-full h-auto rounded-xl aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce-light">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="rounded-full border"
            aria-label="Scroll down"
          >
            <a href="#about">
              <ArrowDown className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
