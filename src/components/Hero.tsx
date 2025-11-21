import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToTemplates = () => {
    const element = document.getElementById("templates");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground mb-4">
            Professional SaaS Templates
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Launch Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              SaaS Faster
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, dark-themed templates designed for modern SaaS businesses. 
            Ready to customize and deploy in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="glow" 
              size="lg"
              onClick={scrollToTemplates}
              className="group"
            >
              Explore Templates
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View on Gumroad
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div>
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Customizable</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
