import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Button
            asChild
            variant="ghost"
            className="mb-8 hover:text-primary transition-colors"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Privacy Policy
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-foreground/80">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  1. Information We Collect
                </h2>
                <p className="text-foreground/80">
                  We collect information that you provide directly to us,
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                </ul>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  2. How We Use Your Information
                </h2>
                <p className="text-foreground/80">
                  We use the information we collect solely to:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Respond to your inquiries</li>
                  <li>Provide requested information</li>
                </ul>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  3. Data Security
                </h2>
                <p className="text-foreground/80">
                  We take reasonable steps to protect your information from
                  loss, misuse, and unauthorized access.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  4. Contact Us
                </h2>
                <p className="text-foreground/80">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mohamed.boudrika.95@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  Mohamed.boudrika.95@gmail.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
