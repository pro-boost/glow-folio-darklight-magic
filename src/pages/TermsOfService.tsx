import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function TermsOfService() {
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
                Terms of Service
              </h1>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-lg text-foreground/80">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  1. Acceptance of Terms
                </h2>
                <p className="text-foreground/80">
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provisions of this agreement.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  2. Use License
                </h2>
                <p className="text-foreground/80">
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on our website for
                  personal, non-commercial transitory viewing only.
                </p>
                <p className="text-foreground/80">
                  This is the grant of a license, not a transfer of title, and
                  under this license, you may not:
                </p>
                <ul className="list-disc pl-6 text-foreground/80 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on the website
                  </li>
                  <li>
                    Remove any copyright or other proprietary notations from the
                    materials
                  </li>
                </ul>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  3. Disclaimer
                </h2>
                <p className="text-foreground/80">
                  The materials on our website are provided on an 'as is' basis.
                  We make no warranties, expressed or implied, and hereby
                  disclaim and negate all other warranties, including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  4. Limitations
                </h2>
                <p className="text-foreground/80">
                  In no event shall we or our suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on our website.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  5. Accuracy of Materials
                </h2>
                <p className="text-foreground/80">
                  The materials appearing on our website could include
                  technical, typographical, or photographic errors. We do not
                  warrant that any of the materials on our website are accurate,
                  complete, or current.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">6. Links</h2>
                <p className="text-foreground/80">
                  We have not reviewed all of the sites linked to our website
                  and are not responsible for the contents of any such linked
                  site. The inclusion of any link does not imply endorsement by
                  us of the site.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  7. Modifications
                </h2>
                <p className="text-foreground/80">
                  We may revise these terms of service for our website at any
                  time without notice. By using this website, you are agreeing
                  to be bound by the then current version of these terms of
                  service.
                </p>
              </section>

              <section className="space-y-4 mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  8. Contact Us
                </h2>
                <p className="text-foreground/80">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact@mohamed-b.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  contact@mohamed-b.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
