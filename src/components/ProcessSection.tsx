import { motion } from "framer-motion";
import {
  ClipboardList,
  Layers,
  Code2,
  Database,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis" },
  { icon: Layers, title: "Backend Architecture" },
  { icon: Code2, title: "REST API Development" },
  { icon: Database, title: "Database Design" },
  { icon: MonitorSmartphone, title: "Frontend Integration" },
  { icon: Rocket, title: "Testing & Deployment" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-navy-deep/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How I Build Systems
        </motion.h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          A structured, repeatable approach to delivering reliable software.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="glass-card p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <step.icon size={20} className="text-primary" />
              </div>
              <div>
                <span className="text-xs text-primary font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-foreground font-medium mt-0.5">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
