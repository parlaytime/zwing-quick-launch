import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Zap, Shield, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business performance with real-time dashboards and custom reports."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly work together with your team using integrated chat, file sharing, and project boards."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your processes to focus on what matters most."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications."
  },
  {
    icon: Globe,
    title: "Global Integration",
    description: "Connect with 100+ popular tools and services through our extensive API ecosystem."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Access your workspace anywhere with our native mobile apps for iOS and Android."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Scale Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to grow with your business, from startup to enterprise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;