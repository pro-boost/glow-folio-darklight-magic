import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/ThemeProvider";
import BackToTop from "./components/BackToTop";
import "./styles.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index section="home" />} />
            <Route path="/about" element={<Index section="about" />} />
            <Route path="/skills" element={<Index section="skills" />} />
            <Route path="/projects" element={<Index section="projects" />} />
            <Route
              path="/testimonials"
              element={<Index section="testimonials" />}
            />
            <Route path="/contact" element={<Index section="contact" />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTop />
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
