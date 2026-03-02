import { motion } from "framer-motion";
import { Server, Monitor, Wrench } from "lucide-react";

const stacks = [
  {
    title: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Postman", "IntelliJ", "VS Code"],
  },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              className="glass-card p-8 hover:glow-shadow transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stack.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {stack.title}
              </h3>
              <ul className="space-y-2">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
