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
    name: "Yassine Benjelloun",
    role: "Product Manager",
    company: "Softech Solutions",
    content:
      "Collaborating with this developer was an incredible experience. Their expertise in creating user-friendly and high-performance web apps is remarkable. They paid attention to every detail and always adapted to our feedback, delivering top-notch results.",
    image: "/images/YassineBenjelloun.jpeg",
  },
  {
    id: "2",
    name: "Clara Dupont",
    role: "Lead Developer",
    company: "TechWave",
    content:
      "This developer combines technical mastery with a real passion for design. Their contributions to our e-commerce platform have greatly improved both our development workflow and the overall user experience. Always reliable and innovative!",
    image: "/images/ClaraDupont.jpeg",
  },
  {
    id: "3",
    name: "Marco Rossi",
    role: "UX/UI Designer",
    company: "Pixelate Studios",
    content:
      "I’ve worked with many developers, but this one stands out. Their ability to take complex design concepts and turn them into flawless code is exceptional. The result was a seamless, responsive design that performed excellently across all devices.",
    image: "/images/MarcoRossi.jpeg",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-12 min-h-screen flex items-center bg-gradient-to-b from-background via-primary/20 to-background"
    >
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
