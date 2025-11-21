import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Built with modern tech stack: React, TypeScript, and Tailwind CSS."
    },
    {
      icon: Palette,
      title: "Dark Design",
      description: "Carefully crafted dark themes that are easy on the eyes and professional."
    },
    {
      icon: Zap,
      title: "Fast Deploy",
      description: "Ready to customize and deploy. No complex setup required."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About DarkBiz
            </h2>
            <p className="text-xl text-muted-foreground">
              Building professional templates for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 bg-card border-border text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-card border-border">
            <p className="text-muted-foreground leading-relaxed mb-6">
              DarkBiz is a self-employed venture focused on creating beautiful, professional templates 
              for SaaS businesses and modern web applications. Every template is crafted with attention 
              to detail, using the latest technologies and design principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in clean code, stunning design, and templates that help you launch faster. 
              Each template is fully customizable, well-documented, and ready for production use.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
