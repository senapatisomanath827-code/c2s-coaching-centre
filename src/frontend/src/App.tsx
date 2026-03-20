import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactSection } from "./components/ContactSection";
import { CoursesSection } from "./components/CoursesSection";
import { FacultySection } from "./components/FacultySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ResultsSection } from "./components/ResultsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WhyChooseSection } from "./components/WhyChooseSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <CoursesSection />
          <WhyChooseSection />
          <ResultsSection />
          <FacultySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
