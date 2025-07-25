import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Brain, 
  Shield, 
  Zap, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Leverage artificial intelligence for smarter financial decisions and technology strategies."
    },
    {
      icon: Shield,
      title: "Secure Solutions",
      description: "Enterprise-grade security for all your financial and technological operations."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid deployment and instant access to cutting-edge financial tools."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Advanced analytics to track performance and optimize your financial portfolio."
    }
  ];

  const stats = [
    { value: 500, label: "Clients Served", suffix: "+" },
    { value: 99.9, label: "Uptime", suffix: "%" },
    { value: 24, label: "Support", suffix: "/7" },
    { value: 50, label: "Integrations", suffix: "+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <TrendingUp className="h-16 w-16 text-primary" />
                <DollarSign className="h-8 w-8 text-secondary absolute -bottom-2 -right-2" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to RVS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your forward-thinking hub that explores the latest in 
              <span className="text-primary font-semibold"> financial strategies</span> and 
              <span className="text-secondary font-semibold"> emerging technologies</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/technology">
                  Explore Technology <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2500}
                    startDelay={index * 200}
                  />
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose RVS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with proven financial expertise 
              to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-smooth hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that trust RVS for their 
            financial and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-foreground hover:text-foreground" 
              asChild
            >
              <Link to="/contact">
                <CheckCircle className="mr-2 h-5 w-5" />
                Get Started Today
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary" 
              asChild
            >
              <Link to="/technology">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;