import { BookOpen, Trophy, UserCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Users size={32} className="text-brand-blue" />,
    title: "Expert Faculty",
    description:
      "Our faculty comprises IIT/IIM alumni and former PSC officers with decades of teaching experience and a track record of producing top rankers.",
  },
  {
    icon: <Trophy size={32} className="text-brand-blue" />,
    title: "Proven Track Record",
    description:
      "Over 10,000 students coached with 95% success rate. Our alumni consistently secure top ranks in IIT-JEE, NEET, and UPSC each year.",
  },
  {
    icon: <BookOpen size={32} className="text-brand-blue" />,
    title: "Structured Curriculum",
    description:
      "Carefully designed syllabus aligned with exam patterns. Regular mock tests, revision sessions, and updated study material ensure you're always exam-ready.",
  },
  {
    icon: <UserCheck size={32} className="text-brand-blue" />,
    title: "Personalized Attention",
    description:
      "Small batch sizes ensure every student gets individual attention. Our doubt-clearing sessions and mentorship program help bridge gaps quickly.",
  },
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Our Strengths
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Why Choose C2S?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            We combine academic excellence with holistic student support to
            maximise your potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              data-ocid={`features.item.${i + 1}`}
              className="bg-white rounded-xl p-7 text-center border border-border shadow-card hover:shadow-card-hover hover:border-brand-blue/25 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue/8 flex items-center justify-center mx-auto mb-5">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
