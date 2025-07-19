import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Camera, 
  Cloud, 
  MapPin, 
  Palette, 
  ShoppingBag, 
  Sparkles, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Recommendations",
    description: "Advanced machine learning algorithms analyze your preferences, body type, and style to suggest perfect outfits.",
    gradient: "from-primary to-primary-glow"
  },
  {
    icon: Camera,
    title: "Skin Tone Analysis",
    description: "Upload your photo and our computer vision technology detects your skin undertone for ideal color matching.",
    gradient: "from-secondary to-pink-400"
  },
  {
    icon: Cloud,
    title: "Weather-Aware Styling",
    description: "Real-time weather integration suggests appropriate clothing based on current and forecasted conditions.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Palette,
    title: "Color Harmony",
    description: "Discover colors that complement your skin tone and create harmonious outfit combinations.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: MapPin,
    title: "Nearby Store Locator",
    description: "Find fashion outlets, shopping malls, and online stores with the best deals near your location.",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: ShoppingBag,
    title: "Virtual Wardrobe",
    description: "Upload your existing clothes and get suggestions on how to mix and match for new styles.",
    gradient: "from-orange-500 to-red-400"
  },
  {
    icon: Sparkles,
    title: "Occasion-Based Styling",
    description: "Get outfit recommendations tailored for specific events - casual, formal, party, or ethnic wear.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Social Style Community",
    description: "Share your outfits, get feedback from the community, and discover trending styles.",
    gradient: "from-teal-500 to-cyan-400"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Smart Features for
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Your Perfect Style
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of fashion with our comprehensive AI-powered platform 
            designed to revolutionize how you discover and style your wardrobe.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-3xl p-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Style?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of fashion enthusiasts who have already discovered their perfect style 
            with our AI-powered recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};