import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Mail,
  MessageSquare,
  Phone,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { useToast } from "./ui/use-toast";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email to yourself with client data
    emailjs
      .send(
        "service_lnbaknq", // Your service ID
        "template_6i42w2g", // Your template ID for the email you receive
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        "u1gmD7IX6M4BMRgHD" // Your user ID
      )
      .then(
        (result) => {
          // Then send auto-reply to the client using the new template
          emailjs
            .send(
              "service_lnbaknq", // Your service ID
              "template_xc9yjas", // Your auto-reply template ID
              {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                date: new Date().toLocaleString(),
              },
              "u1gmD7IX6M4BMRgHD" // Your user ID
            )
            .then(() => {
              toast({
                title: "Message sent!",
                description:
                  "Thank you for reaching out. I'll get back to you soon.",
              });
              setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
              toast({
                title: "Error",
                description:
                  "There was an error sending the auto-reply. Please try again later.",
              });
            });
        },
        (error) => {
          toast({
            title: "Error",
            description:
              "There was an error sending your message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-12 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Feel free to reach out using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          <div className="md:col-span-2 animate-fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Email</p>
                      <a
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mohamed.boudrika.95@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        mohamed.boudrika.95@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Phone</p>
                      <a
                        href="tel:+212661880323"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        +212661880323
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Social</p>
                      <div className="flex gap-4 mt-1">
                        <a
                          href="https://x.com/Pro_boost_/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open("https://x.com/Pro_boost_/", "_blank");
                          }}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 fill-current"
                            aria-hidden="true"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                        <a
                          href="https://github.com/pro-boost/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://github.com/pro-boost/",
                              "_blank"
                            );
                          }}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/mohamed-b-96378b324/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://www.linkedin.com/in/mohamed-b-96378b324/",
                              "_blank"
                            );
                          }}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Current Availability</h3>
                <p className="text-foreground/80">
                  I'm currently available for freelance work and open to new
                  opportunities. My usual response time is within 24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 animate-fade-in delay-200">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card/50 p-8 rounded-xl border"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
