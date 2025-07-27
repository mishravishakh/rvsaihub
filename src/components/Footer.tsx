import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import rvsLogo from "@/assets/rvs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/a21bf342-d7f4-4c3d-96c0-431674de450c.png" 
                alt="RVS Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-background/80 mb-4 max-w-md">
              RVS is your forward-thinking hub that explores the latest in emerging 
              technologies and innovative solutions. We bridge the gap between technology 
              innovation and business transformation.
            </p>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>rvsinfotech01@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (470) 660 9133</span>
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
              <li>Technology Solutions</li>
              <li>AI & Automation</li>
              <li>Digital Transformation</li>
              <li>Innovation Consulting</li>
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