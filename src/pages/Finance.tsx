import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  TrendingUp, 
  PieChart, 
  Banknote, 
  CreditCard, 
  Smartphone,
  ArrowRight,
  Target,
  Shield,
  BarChart3,
  Wallet,
  Building2
} from "lucide-react";

const Finance = () => {
  const financeServices = [
    {
      icon: PieChart,
      title: "Investment Strategy",
      description: "Diversified portfolio management with AI-driven insights to maximize returns while minimizing risk through smart asset allocation.",
      tips: ["Diversify across asset classes", "Regular rebalancing", "Long-term perspective", "Risk assessment"],
      category: "Investment",
      gradient: "gradient-finance"
    },
    {
      icon: Target,
      title: "Financial Planning",
      description: "Comprehensive financial roadmaps tailored to your goals, from retirement planning to wealth preservation strategies.",
      tips: ["Set SMART goals", "Emergency fund building", "Tax optimization", "Estate planning"],
      category: "Planning",
      gradient: "gradient-secondary"
    },
    {
      icon: Banknote,
      title: "Budget Management",
      description: "Smart budgeting solutions that track expenses, identify savings opportunities, and optimize cash flow management.",
      tips: ["50/30/20 rule", "Automated savings", "Expense tracking", "Monthly reviews"],
      category: "Budgeting",
      gradient: "gradient-primary"
    },
    {
      icon: CreditCard,
      title: "Credit Optimization",
      description: "Strategies to improve credit scores, manage debt effectively, and access better financial products and rates.",
      tips: ["Pay on time", "Low utilization", "Credit monitoring", "Debt consolidation"],
      category: "Credit",
      gradient: "gradient-tech"
    },
    {
      icon: Smartphone,
      title: "Fintech Solutions",
      description: "Cutting-edge financial technology platforms for seamless banking, payments, and investment management.",
      tips: ["Mobile banking", "Digital wallets", "Robo-advisors", "Cryptocurrency"],
      category: "Technology",
      gradient: "gradient-hero"
    },
    {
      icon: Building2,
      title: "Business Finance",
      description: "Corporate financial strategies including cash flow management, business loans, and growth financing solutions.",
      tips: ["Cash flow forecasting", "Working capital", "Business credit", "Growth funding"],
      category: "Business",
      gradient: "gradient-finance"
    }
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: "Market Trends 2024",
      content: "ESG investing continues to gain momentum with 73% of institutional investors planning to increase allocations.",
      type: "Trend"
    },
    {
      icon: Shield,
      title: "Risk Management",
      content: "Diversification remains key - spreading investments across 15-20 different assets can reduce portfolio volatility by up to 40%.",
      type: "Strategy"
    },
    {
      icon: BarChart3,
      title: "Performance Insight",
      content: "Dollar-cost averaging has historically outperformed lump-sum investing 68% of the time over 10-year periods.",
      type: "Data"
    }
  ];

  const fintechInnovations = [
    {
      title: "DeFi Protocols",
      description: "Decentralized finance platforms offering lending, borrowing, and yield farming opportunities."
    },
    {
      title: "AI Trading Bots",
      description: "Automated trading systems using machine learning for market analysis and execution."
    },
    {
      title: "Digital Banking",
      description: "Neobanks providing 24/7 banking services with lower fees and better user experiences."
    },
    {
      title: "Robo-Advisors",
      description: "Algorithm-based portfolio management with automatic rebalancing and tax optimization."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-finance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <DollarSign className="h-16 w-16 text-foreground mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Financial Solutions
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Master your finances with expert insights, innovative strategies, and cutting-edge 
            fintech solutions. From budgeting basics to advanced investment strategies.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link to="/contact">
              Get Financial Guidance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Financial Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Financial Services & Tips
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions backed by expert insights and proven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-smooth border-2 hover:border-secondary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${service.gradient}`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Tips:</h4>
                    <div className="space-y-1">
                      {service.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-secondary rounded-full mr-2"></div>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Market Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest financial insights and market trends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      <insight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{insight.type}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                  <p className="text-muted-foreground text-sm">{insight.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech Innovations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fintech Innovations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the latest financial technology innovations transforming the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fintechInnovations.map((innovation, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-smooth group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-smooth">
                    <Wallet className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{innovation.title}</h3>
                  <p className="text-muted-foreground text-sm">{innovation.description}</p>
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
            Ready to Optimize Your Finances?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Take control of your financial future with personalized strategies 
            and cutting-edge fintech solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary" 
              asChild
            >
              <Link to="/technology">
                Explore Tech Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Finance;