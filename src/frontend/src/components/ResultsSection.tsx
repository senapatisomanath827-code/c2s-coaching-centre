import { motion } from "motion/react";

const results = [
  { rank: "AIR 7", exam: "IIT-JEE Advanced 2024", name: "Aryan Sharma" },
  { rank: "AIR 12", exam: "NEET 2024", name: "Priya Nair" },
  { rank: "AIR 3", exam: "UPSC CSE 2023", name: "Rohit Verma" },
  { rank: "AIR 18", exam: "IIT-JEE Advanced 2023", name: "Sneha Gupta" },
  { rank: "AIR 5", exam: "NEET 2023", name: "Mohit Yadav" },
  { rank: "AIR 9", exam: "UPSC CSE 2022", name: "Anjali Singh" },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            Our Achievers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Top Results
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Proud to celebrate the outstanding achievements of our students
            across India's most competitive exams.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {results.map((r, i) => (
            <motion.div
              key={`${r.name}-${i}`}
              data-ocid={`results.item.${i + 1}`}
              className="bg-brand-blue rounded-xl p-5 text-center text-white flex flex-col items-center gap-2 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="text-2xl font-extrabold">{r.rank}</div>
              <div className="text-[11px] font-semibold text-blue-100 leading-tight text-center">
                {r.exam}
              </div>
              <div className="w-8 h-0.5 bg-white/30 rounded" />
              <div className="text-xs font-medium text-white/80">{r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
