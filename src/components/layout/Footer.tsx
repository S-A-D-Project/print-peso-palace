
import { Link } from "react-router-dom";
import { 
  Facebook, Instagram, Twitter, Mail, Phone, MapPin, 
  CreditCard, Shield, Truck, Clock, Printer, Receipt
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-6">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Service Guarantees */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-shop-light p-3 rounded-full mb-3">
              <Printer className="h-6 w-6 text-shop-primary" />
            </div>
            <h3 className="text-sm font-medium">Quality Printing</h3>
            <p className="text-xs text-muted-foreground mt-1">
              High-quality prints with premium materials
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-shop-light p-3 rounded-full mb-3">
              <Truck className="h-6 w-6 text-shop-primary" />
            </div>
            <h3 className="text-sm font-medium">Fast Delivery</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Nationwide shipping within 3-5 days
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-shop-light p-3 rounded-full mb-3">
              <Receipt className="h-6 w-6 text-shop-primary" />
            </div>
            <h3 className="text-sm font-medium">Easy Returns</h3>
            <p className="text-xs text-muted-foreground mt-1">
              100% satisfaction or we'll reprint for free
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-shop-light p-3 rounded-full mb-3">
              <CreditCard className="h-6 w-6 text-shop-primary" />
            </div>
            <h3 className="text-sm font-medium">Secure Payment</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Multiple safe payment options
            </p>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">PrintPeso</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Your one-stop online printing solution. Quality prints at affordable prices delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-shop-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-shop-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-shop-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/business-cards" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Business Cards
                </Link>
              </li>
              <li>
                <Link to="/services/flyers" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Flyers & Brochures
                </Link>
              </li>
              <li>
                <Link to="/services/banners" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Banners & Signage
                </Link>
              </li>
              <li>
                <Link to="/services/stationery" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Stationery
                </Link>
              </li>
              <li>
                <Link to="/services/photo-prints" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Photo Prints
                </Link>
              </li>
              <li>
                <Link to="/services/custom" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Custom Printing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-shop-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-start">
                <MapPin className="h-5 w-5 text-shop-primary shrink-0" />
                <span className="text-muted-foreground">
                  123 Printing Avenue, Makati City, Metro Manila, Philippines
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="h-5 w-5 text-shop-primary shrink-0" />
                <span className="text-muted-foreground">
                  +63 (02) 8123 4567
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="h-5 w-5 text-shop-primary shrink-0" />
                <span className="text-muted-foreground">
                  support@printpeso.com
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock className="h-5 w-5 text-shop-primary shrink-0" />
                <span className="text-muted-foreground">
                  Mon-Fri: 9AM - 6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 PrintPeso. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
              alt="Visa" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="h-6" 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" 
              alt="American Express" 
              className="h-6" 
            />
            <img 
              src="https://www.gcash.com/wp-content/uploads/2019/04/gcash-logo.png" 
              alt="GCash" 
              className="h-6" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
