import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Templates />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
