import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";

const techBadges = ["Java", "Spring Boot", "React", "MySQL"];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-28"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
            Full-Stack
            <br />
            <span className="text-gradient">Developer</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground font-medium">
            Building Scalable Business Applications
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {techBadges.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            I design and develop end-to-end web systems that solve real business
            problems.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
            >
              <FileDown size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right — code illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="glass-card p-6 w-full max-w-sm font-mono text-sm leading-relaxed glow-shadow">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-destructive/80" />
              <span className="w-3 h-3 rounded-full bg-accent/80" />
              <span className="w-3 h-3 rounded-full bg-primary/80" />
            </div>
            <pre className="text-muted-foreground">
              <code>
{`@RestController
public class AppController {

  @GetMapping("/api/status")
  public Response status() {
    return Response.ok(
      "System running ✓"
    );
  }
}`}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
