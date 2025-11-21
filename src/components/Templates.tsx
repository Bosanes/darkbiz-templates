import TemplateCard from "./TemplateCard";

const Templates = () => {
  const templates = [
    {
      title: "Dark-Biz",
      description: "A clean, modern, dark-themed landing page ready to convert visitors into customers.",
      price: "$29",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      demoUrl: "https://dark-biz.vercel.app/",
      buyUrl: "https://gumroad.com",
      tags: ["SaaS", "Landing Page", "Dark Theme"]
    },
    {
      title: "SaaS Starter Pro",
      description: "Complete SaaS starter with authentication, dashboard, and billing ready to go.",
      price: "$49",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      demoUrl: "#",
      buyUrl: "https://gumroad.com",
      tags: ["SaaS", "Dashboard", "Full-Stack"]
    },
    {
      title: "Portfolio Dark",
      description: "Stunning dark portfolio template perfect for developers and designers.",
      price: "$19",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      demoUrl: "#",
      buyUrl: "https://gumroad.com",
      tags: ["Portfolio", "Personal", "Creative"]
    }
  ];

  return (
    <section id="templates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Templates
          </h2>
          <p className="text-xl text-muted-foreground">
            Professionally designed, fully customizable templates to launch your next project faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {templates.map((template) => (
            <TemplateCard key={template.title} {...template} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
