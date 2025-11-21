import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-foreground">
            DarkBiz
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("templates")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Templates
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <Button variant="glow" size="sm">
              View on Gumroad
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
