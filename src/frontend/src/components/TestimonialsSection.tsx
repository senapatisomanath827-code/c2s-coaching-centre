import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ankit Sharma",
    role: "Cleared IIT-JEE Advanced 2024",
    initials: "AS",
    color: "bg-blue-100 text-brand-blue",
    quote:
      "C2S gave me the foundation and confidence I needed. The faculty's personalised guidance helped me crack IIT-JEE with AIR 42. The structured batches and mock tests were game changers!",
  },
  {
    name: "Simran Kaur",
    role: "Cleared NEET 2024 — AIR 28",
    initials: "SK",
    color: "bg-pink-100 text-pink-700",
    quote:
      "I joined C2S after failing once. The biology faculty here is exceptional. Regular doubt-clearing sessions and the test series truly prepared me for the real exam. Grateful to the entire team!",
  },
  {
    name: "Deepak Tiwari",
    role: "Cleared UPSC CSE 2023",
    initials: "DT",
    color: "bg-amber-100 text-amber-700",
    quote:
      "The UPSC coaching at C2S is unparalleled. With ex-IAS mentors guiding every step — from mains writing to interview prep — I could secure a top-100 rank on my first attempt.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Student Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Real stories from real achievers who trusted C2S to guide them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="bg-white rounded-xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Quote size={28} className="text-brand-blue/25 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className={`w-10 h-10 ${t.color}`}>
                  <AvatarFallback className={`text-sm font-bold ${t.color}`}>
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-blue font-medium">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
