
import { 
  FileInput, MousePointerClick, Truck, ThumbsUp 
} from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: FileInput,
      title: "Upload Your Design",
      description: "Upload your design files in various formats (PDF, JPG, PNG, AI, PSD) or use our design templates."
    },
    {
      icon: MousePointerClick,
      title: "Customize & Order",
      description: "Choose your paper, size, quantity, and finishing options. Review your order and proceed to checkout."
    },
    {
      icon: Truck,
      title: "Production & Delivery",
      description: "We'll print your order with care and deliver it to your doorstep with our reliable delivery partners."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "Enjoy your high-quality prints. If you're not satisfied, we offer revisions or refunds."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting your print products is easy with our simple 4-step process
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-shop-light mb-4">
                <step.icon className="h-8 w-8 text-shop-primary" />
              </div>
              <div className="bg-shop-primary text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
