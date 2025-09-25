import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Your
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Business Operations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Streamline workflows, boost productivity, and scale your business with Zwing's 
            all-in-one project management and analytics platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-medium group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-in">
            <img 
              src={heroDashboard}
              alt="Zwing Dashboard Interface"
              className="w-full rounded-2xl shadow-strong animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;