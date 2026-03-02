import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer (Freelance)",
    period: "2024 – Present",
    description:
      "Building custom business applications using Spring Boot and React for local clients.",
  },
  {
    role: "BIT Undergraduate — UCSC",
    period: "2022 – Present",
    description:
      "Studying Information Technology with a focus on software engineering and database systems.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                {exp.period}
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
