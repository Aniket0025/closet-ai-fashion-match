import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Crown, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out AI fashion recommendations",
      features: [
        "5 AI recommendations per month",
        "Basic skin tone analysis",
        "Weather-aware suggestions",
        "Community support",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "elegant" as const,
      popular: false
    },
    {
      name: "Style Pro",
      price: "$9.99",
      period: "per month",
      description: "Ideal for fashion enthusiasts who want unlimited access",
      features: [
        "Unlimited AI recommendations",
        "Advanced skin tone analysis",
        "Virtual wardrobe management",
        "Personalized color palette",
        "Store integration & deals",
        "Priority support",
        "Style trend alerts"
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Style Elite",
      price: "$19.99",
      period: "per month",
      description: "For fashion professionals and serious style enthusiasts",
      features: [
        "Everything in Style Pro",
        "Personal stylist consultation",
        "Custom outfit planning",
        "Brand collaboration access",
        "Analytics & insights",
        "White-label solutions",
        "24/7 premium support",
        "Early access to new features"
      ],
      buttonText: "Go Elite",
      buttonVariant: "premium" as const,
      popular: false
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
              Simple <span className="bg-gradient-hero bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your style journey. Start free and upgrade anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative h-full ${plan.popular ? 'border-primary shadow-glow scale-105' : 'shadow-elegant'} transition-all duration-300 hover:shadow-glow`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                      <Crown className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="mb-4">
                    {plan.name === "Free" && <Sparkles className="w-12 h-12 mx-auto text-primary" />}
                    {plan.name === "Style Pro" && <Zap className="w-12 h-12 mx-auto text-primary" />}
                    {plan.name === "Style Elite" && <Crown className="w-12 h-12 mx-auto text-primary" />}
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild variant={plan.buttonVariant} size="lg" className="w-full">
                    <Link to="/signup">{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="max-w-2xl mx-auto space-y-4 text-left">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">Can I change my plan anytime?</h4>
                <p className="text-sm text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">Is there a free trial for paid plans?</h4>
                <p className="text-sm text-muted-foreground">Yes, we offer a 7-day free trial for all paid plans. No credit card required.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">How accurate are the AI recommendations?</h4>
                <p className="text-sm text-muted-foreground">Our AI has a 98% accuracy rate based on user feedback and continuously improves with usage.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;