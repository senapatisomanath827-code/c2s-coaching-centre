import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            className="flex flex-col justify-center cursor-pointer bg-transparent border-0 p-0"
            onClick={() => handleNavClick("#home")}
          >
            <span className="text-2xl font-extrabold text-brand-blue tracking-tight leading-none">
              C2S
            </span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase leading-tight">
              College for Competitive Studies
            </span>
          </button>

          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-brand-blue transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              type="button"
              data-ocid="header.enroll.primary_button"
              onClick={() => handleNavClick("#contact")}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-5"
            >
              Enroll Now
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="header.menu.toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium py-2 text-foreground/80 hover:text-brand-blue"
                >
                  {link.label}
                </button>
              ))}
              <Button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="mt-2 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold"
              >
                Enroll Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
