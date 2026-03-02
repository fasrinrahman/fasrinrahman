import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I am a Full-Stack Developer pursuing a BIT at UCSC. I build
            structured backend systems using Spring Boot and connect them with
            modern React frontends to create scalable business solutions. My
            focus is on clean architecture, maintainable code, and systems that
            actually work in production.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
