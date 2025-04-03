
import { Button } from "@/components/ui/button";
import { Printer, Package, Clock, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  const benefits = [
    {
      icon: Printer,
      title: "High-Quality Printing",
      description: "Premium materials & state-of-the-art technology"
    },
    {
      icon: Package,
      title: "Nationwide Delivery",
      description: "Fast shipping to all provinces in the Philippines"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Rush printing available for urgent orders"
    },
    {
      icon: CreditCard,
      title: "Competitive Pricing",
      description: "Great value without compromising quality"
    }
  ];

  return (
    <section className="py-12 bg-shop-primary text-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Start Your Printing Project?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            From business essentials to marketing materials, we've got all your printing needs covered at affordable prices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <benefit.icon className="h-10 w-10 mb-3" />
              <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
              <p className="text-white/80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-shop-primary hover:bg-gray-100"
            asChild
          >
            <Link to="/services">
              Start Ordering Now
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link to="/contact">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
