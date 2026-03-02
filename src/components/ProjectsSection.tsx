import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Jewellery Inventory Management System",
    description:
      "Full-stack inventory system with order management and production workflow using Spring Boot and React.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    title: "Student Management Portal",
    description:
      "End-to-end student records management with role-based access control and RESTful API backend.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-navy-deep/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-primary/10 to-card flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-mono">
                  {`// ${project.title.split(" ")[0].toLowerCase()}.app`}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
