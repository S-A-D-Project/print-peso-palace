
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Have questions about our printing services? Our team is here to help you. 
            Fill out the form below or use our contact information to get in touch.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-shop-primary focus:ring-shop-primary"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="bg-shop-primary hover:bg-shop-secondary">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-shop-primary shrink-0 mt-0.5" />
                    <p className="text-gray-600">
                      123 Printing Avenue, Makati City, Metro Manila, Philippines
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-shop-primary shrink-0" />
                    <p className="text-gray-600">+63 (02) 8123 4567</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-shop-primary shrink-0" />
                    <p className="text-gray-600">support@printpeso.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="h-6 w-6 text-shop-primary shrink-0" />
                    <p className="text-gray-600">Monday to Friday: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map will be displayed here</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
