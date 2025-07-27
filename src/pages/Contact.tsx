import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  MessageSquare,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_rvs_contact';
      const templateId = 'template_rvs_form'; 
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace this with your actual EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'rvsinfotech01@gmail.com',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at rvsinfotech01@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "rvsinfotech01@gmail.com",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (470) 660-9133",
      description: "Speak with our team"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      content: "Worldwide Operations",
      description: "Serving clients globally"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "Quick response guaranteed"
    }
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services and solutions"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Explore collaboration opportunities"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with our platforms and tools"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="mr-3 h-6 w-6 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        className="w-full resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      variant="hero"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">How Can We Help?</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help with all your technology needs and innovative solutions.
                </p>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-md transition-smooth">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-secondary/10 rounded-lg mr-4">
                          <service.icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;