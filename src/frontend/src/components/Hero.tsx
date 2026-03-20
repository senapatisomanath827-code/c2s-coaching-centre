import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToCourses = () => {
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-students.dim_1400x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,25,47,0.82) 0%, rgba(10,25,47,0.60) 45%, rgba(10,25,47,0.15) 75%, rgba(10,25,47,0.05) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4 border border-blue-300/40 rounded-full px-3 py-1">
              India's Premier Coaching Centre
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white uppercase leading-tight tracking-tight mb-5">
              ACHIEVE YOUR
              <br />
              DREAM
              <br />
              WITH C2S
            </h1>
          </motion.div>

          <motion.p
            className="text-lg text-white/85 font-normal mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Expert coaching for IIT-JEE, NEET, UPSC and more. Join thousands of
            students who turned their dreams into reality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              type="button"
              data-ocid="hero.explore.primary_button"
              size="lg"
              onClick={scrollToCourses}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3 text-base shadow-lg"
            >
              Explore Courses
            </Button>
            <Button
              type="button"
              data-ocid="hero.contact.secondary_button"
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-white/60 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 py-3 text-base backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {[
              { value: "10,000+", label: "Students Enrolled" },
              { value: "95%", label: "Success Rate" },
              { value: "150+", label: "Expert Faculty" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-white/70 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <button
          type="button"
          onClick={scrollToCourses}
          aria-label="Scroll down"
          className="text-white/60 hover:text-white/90 transition-colors"
        >
          <ChevronDown size={28} />
        </button>
      </motion.div>
    </section>
  );
}
