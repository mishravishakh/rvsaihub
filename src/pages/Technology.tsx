import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Blocks, 
  Cog, 
  Cloud, 
  Shield, 
  Smartphone,
  ArrowRight,
  Zap,
  Database,
  Globe
} from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine learning algorithms that adapt and evolve with your business needs, providing predictive analytics and automated decision-making capabilities.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Trading"],
      status: "Hot",
      gradient: "gradient-tech"
    },
    {
      icon: Blocks,
      title: "Blockchain Technology",
      description: "Secure, decentralized solutions for transparent transactions, smart contracts, and digital asset management in the financial sector.",
      features: ["Smart Contracts", "Cryptocurrency Integration", "DeFi Solutions", "Tokenization"],
      status: "Trending",
      gradient: "gradient-primary"
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation that reduces costs, minimizes errors, and accelerates business processes.",
      features: ["RPA Solutions", "Workflow Optimization", "API Integration", "Real-time Monitoring"],
      status: "Essential",
      gradient: "gradient-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure that grows with your business, ensuring reliability, security, and global accessibility.",
      features: ["Multi-Cloud Strategy", "Serverless Architecture", "Auto-scaling", "Disaster Recovery"],
      status: "Core",
      gradient: "gradient-hero"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security measures protecting your financial data and technology infrastructure from emerging threats.",
      features: ["Zero Trust Architecture", "Threat Detection", "Data Encryption", "Compliance Management"],
      status: "Critical",
      gradient: "gradient-tech"
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
      features: ["Cross-Platform Apps", "Mobile Banking", "Biometric Authentication", "Offline Capabilities"],
      status: "Growth",
      gradient: "gradient-finance"
    }
  ];

  const emergingTrends = [
    {
      icon: Database,
      title: "Quantum Computing",
      description: "Exploring quantum algorithms for complex financial modeling and risk assessment."
    },
    {
      icon: Globe,
      title: "Edge Computing",
      description: "Bringing computation closer to data sources for real-time financial transactions."
    },
    {
      icon: Zap,
      title: "5G Integration",
      description: "Leveraging ultra-fast connectivity for instantaneous financial operations."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Brain className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology Solutions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover cutting-edge technologies that are reshaping the financial industry. 
            From AI-powered analytics to blockchain innovations, we're at the forefront 
            of technological advancement.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact">
              Schedule a Tech Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The technologies that power modern financial services and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-smooth border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${tech.gradient}`}>
                      <tech.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{tech.status}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tech.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Trends */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Emerging Trends
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The next wave of technologies that will transform how we think about finance and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {emergingTrends.map((trend, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <trend.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{trend.title}</h3>
                  <p className="text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how these technologies can transform your business 
            and give you a competitive edge in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Start Your Tech Journey
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary" 
              asChild
            >
              <Link to="/finance">
                Explore Finance Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;