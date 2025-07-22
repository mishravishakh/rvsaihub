import { Link } from "react-router-dom";
import { TrendingUp, DollarSign, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <TrendingUp className="h-8 w-8 text-white" />
                <DollarSign className="h-4 w-4 text-secondary absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">RVS</span>
            </Link>
            <p className="text-background/80 mb-4 max-w-md">
              RVS is your forward-thinking hub that explores the latest in financial 
              strategies and emerging technologies. We bridge the gap between finance 
              and technology innovation.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rvsinfotech01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link to="/" className="hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-smooth">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/finance" className="hover:text-white transition-smooth">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Financial Strategy</li>
              <li>Technology Solutions</li>
              <li>Investment Insights</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 RVS. All rights reserved. Built with innovation in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;