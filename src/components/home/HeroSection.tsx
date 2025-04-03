
import { ChevronRight, ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-shop-light to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-shop-primary">Premium Printing</span> Services at Affordable Prices
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your ideas into reality with our high-quality printing services. 
              From business cards to large format printing, we've got you covered!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-shop-primary hover:bg-shop-secondary">
                Browse Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-shop-primary text-shop-primary hover:bg-shop-light">
                <Upload className="mr-2 h-4 w-4" />
                Upload Design
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium mb-3">Our Trusted Clients:</p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 sm:h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-6 sm:h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-6 sm:h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Shopee_logo.svg" alt="Shopee" className="h-6 sm:h-8" />
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-16 -right-16 h-56 w-56 bg-shop-primary opacity-10 rounded-full"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Printing services"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 fill-yellow-400" 
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium text-sm">4.9/5</span>
              </div>
              <p className="text-sm font-medium">
                "Excellent quality and fast delivery!"
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">Maria Santos</span>
                <Link to="/reviews" className="text-xs text-shop-primary flex items-center gap-1">
                  Read more <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};
