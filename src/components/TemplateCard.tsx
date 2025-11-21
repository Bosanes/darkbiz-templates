import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface TemplateCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  demoUrl: string;
  buyUrl: string;
  tags: string[];
}

const TemplateCard = ({ title, description, price, image, demoUrl, buyUrl, tags }: TemplateCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
      <div className="relative overflow-hidden aspect-video bg-secondary">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-2">
          <Button variant="secondary" size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
          <Button variant="glow" size="sm" asChild>
            <a href={buyUrl} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </Button>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button variant="outline" size="sm" asChild>
            <a href={buyUrl} target="_blank" rel="noopener noreferrer">
              Purchase
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TemplateCard;
