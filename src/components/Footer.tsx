const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fasrin Rahman. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with React & Spring Boot mindset
        </p>
      </div>
    </footer>
  );
};

export default Footer;
