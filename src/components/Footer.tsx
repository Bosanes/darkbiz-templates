import { Button } from "@/components/ui/button";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">DarkBiz</h3>
            <p className="text-muted-foreground mb-4">
              Professional SaaS templates for modern businesses. 
              Launch faster with beautiful, customizable designs.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:contact@darkbiz.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Templates</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  SaaS
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Landing Pages
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gumroad
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 DarkBiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
