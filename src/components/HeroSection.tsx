import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fashion.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">AI-Powered Fashion Intelligence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Get personalized clothing recommendations powered by AI. Analyze your skin tone, 
                body type, weather conditions, and personal preferences for the perfect outfit every time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/signup">
                  Start Your Style Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button asChild variant="elegant" size="lg" className="group">
                <Link to="/features">
                  <Zap className="w-5 h-5" />
                  Try AI Analysis
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Skin Tone Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Weather-Aware</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                <span>Personal Style</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="AI Fashion Technology" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-card rounded-2xl p-4 shadow-glow animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">AI Match</p>
                  <p className="text-xs text-muted-foreground">98% Accuracy</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Style Score</p>
                  <p className="text-xs text-muted-foreground">Excellent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};