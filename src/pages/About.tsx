import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Heart, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Innovation",
      description: "We leverage cutting-edge AI technology to revolutionize how people discover and choose their clothing."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Style",
      description: "Every individual is unique, and our platform celebrates personal style while helping you discover new possibilities."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Our recommendations are data-driven and scientifically accurate, considering multiple factors for the perfect match."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a community of fashion enthusiasts who share insights, trends, and style inspiration."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      description: "Former fashion stylist with 10+ years experience, passionate about democratizing personal styling."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "CTO & AI Lead",
      description: "PhD in Computer Vision, previously at Google AI, specializes in image recognition and ML algorithms."
    },
    {
      name: "Emma Thompson",
      role: "Head of Design",
      description: "Award-winning UX designer with expertise in fashion tech and user-centered design principles."
    },
    {
      name: "David Kim",
      role: "Head of Fashion",
      description: "Fashion industry veteran with partnerships across major brands and deep trend analysis expertise."
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
              About <span className="bg-gradient-hero bg-clip-text text-transparent">StyleAI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to democratize personal styling through AI, making fashion accessible, 
              personalized, and sustainable for everyone, everywhere.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Fashion should be personal, accessible, and sustainable. We believe everyone deserves to look and feel their best, 
                  regardless of their fashion knowledge, budget, or location.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Through advanced AI technology, we're breaking down barriers in the fashion industry, providing personalized 
                  styling advice that was once exclusive to the wealthy, now available to everyone.
                </p>
                <Button asChild variant="hero">
                  <Link to="/signup">Join Our Mission</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-subtle rounded-3xl p-8 shadow-elegant">
                  <div className="text-center space-y-6">
                    <div className="text-4xl font-bold text-primary">500K+</div>
                    <div className="text-muted-foreground">Users Worldwide</div>
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                    <div className="text-4xl font-bold text-primary">2M+</div>
                    <div className="text-muted-foreground">Outfits Recommended</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-elegant hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle rounded-3xl p-12 shadow-elegant">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Style?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of thousands of users who have discovered their perfect style with AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/signup">Get Started Today</Link>
              </Button>
              <Button asChild variant="elegant" size="lg">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;