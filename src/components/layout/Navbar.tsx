
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ShoppingCart, Search, User, Menu, X, LogIn, 
  Package, Bell, Heart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();
  
  // Helper to check if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/" 
                  className={cn("text-lg font-semibold hover:text-shop-primary", 
                    isActive("/") && "text-shop-primary")}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={cn("text-lg font-semibold hover:text-shop-primary", 
                    isActive("/services") && "text-shop-primary")}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className={cn("text-lg font-semibold hover:text-shop-primary", 
                    isActive("/about") && "text-shop-primary")}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className={cn("text-lg font-semibold hover:text-shop-primary", 
                    isActive("/contact") && "text-shop-primary")}
                >
                  Contact
                </Link>
                <Link 
                  to="/track-order" 
                  className={cn("text-lg font-semibold hover:text-shop-primary", 
                    isActive("/track-order") && "text-shop-primary")}
                >
                  Track Order
                </Link>
              </nav>
              <div className="mt-8 flex flex-col gap-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
                <Button className="w-full justify-start gap-2">
                  <User className="h-4 w-4" />
                  <span>Sign Up</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-shop-primary">
              PrintPeso
            </span>
          </Link>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 items-center justify-center px-6">
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for printing services..."
              className="w-full pl-10 rounded-full border-shop-primary/20 focus-visible:ring-shop-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-shop-primary hover:bg-shop-secondary"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setShowMobileSearch(!showMobileSearch)}
        >
          {showMobileSearch ? (
            <X className="h-5 w-5" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle search</span>
        </Button>

        {/* Nav Action Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
            <Link to="/favorites">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
            <Link to="/notifications">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/track-order">
              <Package className="h-5 w-5" />
              <span className="sr-only">Orders</span>
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            asChild
            className={cn(isActive("/cart") && "bg-gray-100")}
          >
            <Link to="/cart">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-shop-primary text-white text-xs flex items-center justify-center">
                  3
                </span>
              </div>
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
            <Link to="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div 
        className={cn(
          "md:hidden container px-4 pb-4 transition-all duration-200 ease-in-out", 
          showMobileSearch ? "h-14 opacity-100" : "h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search services..."
            className="w-full pl-10 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button 
            size="sm" 
            className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-shop-primary hover:bg-shop-secondary"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
