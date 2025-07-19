import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Camera, Cloud, MapPin, Palette, Sparkles, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Based Clothing Recommendations",
      description: "Advanced AI analyzes your preferences, body type, and occasion to suggest perfect outfits.",
      details: ["Personal style analysis", "Body type consideration", "Occasion-based suggestions"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Skin Tone Analyzer",
      description: "Upload your photo for AI-powered skin tone detection and personalized color recommendations.",
      details: ["Computer vision analysis", "Warm/cool/neutral detection", "Ideal color palette suggestions"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Weather-Aware Suggestions",
      description: "Get clothing recommendations based on real-time weather conditions in your location.",
      details: ["Live weather integration", "Seasonal outfit planning", "Temperature-based fabric suggestions"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Nearby Store Integration",
      description: "Find fashion outlets, malls, and online stores with ratings and best deals near you.",
      details: ["Store locator", "Price comparisons", "User ratings and reviews"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Outfit Generator",
      description: "Generate complete outfit sets for any occasion with matching accessories and styling tips.",
      details: ["Theme-based generation", "Complete outfit coordination", "Accessory recommendations"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Virtual Wardrobe",
      description: "Upload your existing clothes and get suggestions for new combinations and styling ideas.",
      details: ["Wardrobe management", "Mix & match suggestions", "Style optimization"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Authentication",
      description: "Secure login with email/password or Google authentication to save your preferences.",
      details: ["Multiple login options", "Profile management", "Preference storage"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Admin Dashboard",
      description: "Comprehensive admin tools for managing users, trends, and platform analytics.",
      details: ["User management", "Trend updates", "Analytics insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4">
              Platform <span className="bg-gradient-hero bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover all the powerful AI features that make StyleAI the ultimate clothing recommendation platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 text-primary-foreground group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">Start Using Features Today</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;