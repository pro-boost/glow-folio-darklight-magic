import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Working with this developer was an absolute pleasure. Their attention to detail and commitment to creating accessible, performant web applications is impressive. They consistently delivered high-quality code and were always open to feedback.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Lead Developer",
    company: "InnovateLabs",
    content:
      "An exceptional front-end developer who brings both technical expertise and creative problem-solving to every project. Their work on our design system significantly improved our development workflow and user experience.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "UX Director",
    company: "DesignHub",
    content:
      "Their ability to translate complex design requirements into clean, efficient code is remarkable. They consistently delivered pixel-perfect implementations while maintaining excellent performance and accessibility standards.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground/90">
            What People Say About My Work
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-card border border-border/50 rounded-xl p-6 md:p-8 relative",
                "hover:shadow-lg transition-all duration-300",
                "animate-scale-in",
                index === 1 ? "delay-200" : index === 2 ? "delay-400" : ""
              )}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
