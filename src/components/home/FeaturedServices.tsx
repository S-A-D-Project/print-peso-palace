
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, ChevronRight, Star, ShoppingCart, Heart
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    id: 1,
    title: "Premium Business Cards",
    description: "Make a lasting impression with our premium business cards printed on 350gsm silk card with option for spot UV.",
    price: 499,
    old_price: 699,
    image: "https://images.unsplash.com/photo-1550876053-7ddb7aadae64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 124,
    discount: 28,
    path: "/services/business-cards/premium",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "A5 Flyers Double Sided",
    description: "Full color double-sided A5 flyers printed on 150gsm gloss art paper. Perfect for promotions and events.",
    price: 899,
    old_price: 1299,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 86,
    discount: 30,
    path: "/services/flyers/a5-double-sided",
    tag: "Popular"
  },
  {
    id: 3,
    title: "Roll-Up Banner Stand",
    description: "Large format 85cm x 200cm roll-up banner with aluminum base. Includes carrying case for easy transportation.",
    price: 2499,
    old_price: 2999,
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 52,
    discount: 16,
    path: "/services/banners/roll-up",
    tag: "High Quality"
  },
  {
    id: 4,
    title: "Custom Sticker Sheets",
    description: "A4 sheets of custom die-cut stickers. Print your logo, design or product labels in various quantities.",
    price: 599,
    old_price: 799,
    image: "https://images.unsplash.com/photo-1633226340451-59144f01826e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 98,
    discount: 25,
    path: "/services/stickers/sheet",
    tag: "Trending"
  },
  {
    id: 5,
    title: "Hardcover Bookbinding",
    description: "Professional hardcover binding for your reports, portfolios or books with various cover finish options.",
    price: 1999,
    old_price: 2499,
    image: "https://images.unsplash.com/photo-1533153347379-c4a0a2808906?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 42,
    discount: 20,
    path: "/services/bookbinding/hardcover",
    tag: "Professional"
  },
  {
    id: 6,
    title: "Vinyl Banners",
    description: "Heavy-duty full-color vinyl banners with reinforced edges and grommets, perfect for outdoor use.",
    price: 3499,
    old_price: 3999,
    image: "https://images.unsplash.com/photo-1561051933-71a5abc8d11e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 65,
    discount: 12,
    path: "/services/banners/vinyl",
    tag: "Durable"
  }
];

export const FeaturedServices = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  
  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setStartIndex(prev => Math.min(services.length - itemsToShow, prev + 1));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Featured Services
            </h2>
            <p className="text-gray-600">
              Our most popular printing services at special prices
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="border-shop-primary text-shop-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={startIndex >= services.length - itemsToShow}
              className="border-shop-primary text-shop-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(startIndex, startIndex + itemsToShow).map((service) => (
            <div key={service.id} className="service-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-shop-primary hover:bg-shop-secondary">
                    {service.discount}% OFF
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full">
                    <Heart className="h-4 w-4 text-shop-primary" />
                  </Button>
                </div>
                {service.tag && (
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-shop-primary text-shop-primary">
                      {service.tag}
                    </Badge>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <Link to={service.path}>
                  <h3 className="font-semibold text-lg mb-1 hover:text-shop-primary transition-colors">
                    {service.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm font-medium">{service.rating}</span>
                  <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-shop-primary">
                      ₱{service.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ₱{service.old_price.toFixed(2)}
                    </p>
                  </div>
                  
                  <Button size="sm" className="bg-shop-primary hover:bg-shop-secondary">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="border-shop-primary text-shop-primary hover:bg-shop-light">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
