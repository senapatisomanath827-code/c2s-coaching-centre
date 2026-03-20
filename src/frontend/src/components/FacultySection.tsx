import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "motion/react";

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    subject: "Physics",
    exp: "22 Years",
    initials: "RK",
    bio: "IIT Delhi alumnus. Specialises in Mechanics and Electrodynamics for JEE Advanced.",
    color: "bg-blue-100 text-brand-blue",
  },
  {
    name: "Dr. Meena Iyer",
    subject: "Biology",
    exp: "18 Years",
    initials: "MI",
    bio: "AIIMS graduate with extensive experience coaching NEET aspirants to top 100 ranks.",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Shri. Arun Mishra",
    subject: "Public Administration",
    exp: "15 Years",
    initials: "AM",
    bio: "Retired IAS Officer (1998 batch). Guides UPSC aspirants on GS and optional strategy.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Prof. Kavita Rao",
    subject: "Mathematics",
    exp: "20 Years",
    initials: "KR",
    bio: "NIT Trichy alumna. Known for simplifying complex topics in Calculus and Algebra for JEE.",
    color: "bg-purple-100 text-purple-700",
  },
];

export function FacultySection() {
  return (
    <section id="faculty" className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Meet The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Our Faculty
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Learn from the best — experienced educators dedicated to your
            success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              data-ocid={`faculty.item.${i + 1}`}
              className="bg-white rounded-xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Avatar className={`w-16 h-16 mb-4 text-lg font-bold ${f.color}`}>
                <AvatarFallback className={f.color}>
                  {f.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-base font-bold text-foreground">{f.name}</h3>
              <p className="text-xs font-semibold text-brand-blue mt-0.5">
                {f.subject}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {f.exp} Experience
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {f.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
