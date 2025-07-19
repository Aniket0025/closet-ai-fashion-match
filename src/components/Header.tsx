import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">StyleAI</h1>
              <Badge variant="secondary" className="text-xs">Beta</Badge>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost">
              <Link to="/signin">Sign In</Link>
            </Button>
            <Button asChild variant="default">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-4">
              <Link to="/features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button asChild variant="ghost" className="justify-start">
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild variant="default" className="justify-start">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};