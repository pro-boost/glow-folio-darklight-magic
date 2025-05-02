import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-mono">
              Dev<span className="text-primary">Folio</span>
            </a>
            <p className="text-foreground/60 mt-2">
              Creating digital experiences that inspire.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/pro-boost/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/pro-boost/", "_blank");
              }}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/NooneN2102"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="X (Twitter)"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://x.com/NooneN2102", "_blank");
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
              href="https://www.linkedin.com/in/noone-noone-96378b324/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/noone-noone-96378b324/",
                  "_blank"
                );
              }}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohamed.boudrika.95@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {year} Mohamed Boudrika. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
