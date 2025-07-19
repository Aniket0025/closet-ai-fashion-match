import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Camera, Sparkles, User, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <User className="w-8 h-8" />,
      title: "Create Your Profile",
      description: "Sign up and complete your style profile with preferences, body type, and personal details.",
      details: ["Quick registration", "Style preference quiz", "Body measurements (optional)", "Location setup"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Upload Your Photo",
      description: "Let our AI analyze your skin tone and facial features for personalized color recommendations.",
      details: ["Skin tone detection", "Undertone analysis", "Color palette generation", "Privacy protected"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Get AI Recommendations",
      description: "Receive personalized outfit suggestions based on weather, occasion, and your unique style.",
      details: ["Weather integration", "Occasion selection", "Style matching", "Real-time updates"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Shop & Style",
      description: "Browse recommended items, find nearby stores, and build your perfect wardrobe with confidence.",
      details: ["Store locator", "Price comparison", "Wardrobe building", "Style tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4">
              How It <span className="bg-gradient-hero bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized fashion recommendations in 4 simple steps powered by advanced AI technology
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground shadow-glow">
                      {step.icon}
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                    </div>
                  </div>
                  
                  <Card className="flex-grow shadow-elegant">
                    <CardHeader>
                      <CardTitle className="text-2xl">{step.title}</CardTitle>
                      <CardDescription className="text-lg">{step.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center my-8">
                    <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16 space-y-4">
            <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
            <p className="text-muted-foreground">Join thousands of users who have transformed their style with AI</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/signup">Start Your Style Journey</Link>
              </Button>
              <Button asChild variant="elegant" size="lg">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;