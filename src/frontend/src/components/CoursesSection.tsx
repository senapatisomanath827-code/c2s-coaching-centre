import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, FlaskConical, Landmark } from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: <FlaskConical size={36} className="text-brand-blue" />,
    title: "Engineering",
    subtitle: "IIT-JEE / JEE Main",
    description:
      "Comprehensive preparation for IIT-JEE Advanced and JEE Main with expert faculty, rigorous practice sessions, and personalized mentorship to crack the toughest engineering entrance exams.",
    topics: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    icon: (
      <FlaskConical
        size={36}
        className="text-brand-blue"
        style={{ transform: "scaleX(-1)" }}
      />
    ),
    title: "Medical",
    subtitle: "NEET / AIIMS",
    description:
      "Structured coaching for NEET and AIIMS entrance exams covering Biology, Chemistry and Physics. In-depth study material, test series, and doubt-clearing sessions for aspiring doctors.",
    topics: ["Biology", "Chemistry", "Physics"],
  },
  {
    icon: <Landmark size={36} className="text-brand-blue" />,
    title: "Civil Services",
    subtitle: "UPSC / State PSC",
    description:
      "End-to-end UPSC Civil Services and State PSC preparation with GS coaching, essay writing, current affairs, and mock interview sessions by former IAS/IPS officers.",
    topics: ["GS Paper I-IV", "Optional", "Interview Prep"],
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Courses Offered
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-base">
            Tailored programs for every competitive exam, taught by India's top
            educators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card
                data-ocid={`courses.item.${i + 1}`}
                className="h-full border border-border hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all duration-300 group rounded-xl"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-xl bg-brand-blue/8 flex items-center justify-center mb-4 group-hover:bg-brand-blue/14 transition-colors">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand-blue mt-0.5">
                      {course.subtitle}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium bg-section-bg text-brand-blue px-2.5 py-1 rounded-full border border-brand-blue/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    data-ocid={`courses.learn_more.button.${i + 1}`}
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group/btn"
                  >
                    Learn More
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/btn:translate-x-1"
                    />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
