import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact Us", href: "#contact" },
];

const courseLinks = [
  "IIT-JEE Advanced",
  "JEE Main",
  "NEET",
  "AIIMS",
  "UPSC CSE",
  "State PSC",
];

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.15_0.04_231)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-extrabold text-white tracking-tight leading-none">
                C2S
              </span>
              <span className="text-[10px] text-white/50 font-medium uppercase tracking-wide mt-1">
                College for Competitive Studies
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Empowering students to crack India's most competitive exams with
              expert guidance, proven methods, and unwavering support.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: <SiFacebook size={16} />,
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: <SiInstagram size={16} />,
                  href: "#",
                  label: "Instagram",
                },
                { icon: <SiYoutube size={16} />, href: "#", label: "YouTube" },
                { icon: <SiX size={16} />, href: "#", label: "X" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md bg-white/10 hover:bg-brand-blue flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Courses
            </h4>
            <ul className="space-y-2">
              {courseLinks.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#courses")}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="leading-relaxed">
                123, Education Hub, Sector 18
                <br />
                Connaught Place, New Delhi – 110001
              </li>
              <li>
                <a
                  href="mailto:info@c2s.edu.in"
                  className="hover:text-white transition-colors"
                >
                  info@c2s.edu.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {year} C2S. All Rights Reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
