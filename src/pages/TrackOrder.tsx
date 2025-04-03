
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [showTracking, setShowTracking] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to fetch order status
    if (orderNumber.trim()) {
      setShowTracking(true);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Track Your Order</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Enter your order number below to check the current status of your order.
          </p>
          
          <div className="max-w-xl mb-12">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <Input
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number"
                className="flex-grow"
              />
              <Button 
                type="submit"
                className="bg-shop-primary hover:bg-shop-secondary flex gap-2 items-center"
              >
                <Search className="h-4 w-4" />
                Track
              </Button>
            </form>
          </div>
          
          {showTracking && (
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Order #{orderNumber}</h2>
                <p className="text-sm text-gray-500">Ordered on April 3, 2025</p>
              </div>
              
              <div className="relative">
                {/* Progress bar */}
                <div className="h-1 bg-gray-200 absolute top-10 left-0 right-0 z-0">
                  <div className="h-full bg-shop-primary w-2/3"></div>
                </div>
                
                {/* Status steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 relative z-10">
                  {[
                    {icon: Package, title: "Order Received", date: "Apr 3", completed: true},
                    {icon: Package, title: "Processing", date: "Apr 4", completed: true},
                    {icon: Truck, title: "Out for Delivery", date: "Apr 5", completed: false},
                    {icon: CheckCircle, title: "Delivered", date: "Expected Apr 6", completed: false}
                  ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center mb-8">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                        step.completed ? "bg-shop-primary text-white" : "bg-gray-200 text-gray-400"
                      }`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-medium mt-3 mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-3">Shipping Details</h3>
                <p className="text-gray-700">
                  John Doe<br />
                  123 Main Street, Barangay San Antonio<br />
                  Makati City, Metro Manila 1200<br />
                  Philippines<br />
                  Contact: +63 912 345 6789
                </p>
              </div>
            </div>
          )}
          
          {!showTracking && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Tracking Information</h2>
              <p className="text-gray-600 mb-3">
                Once you've placed an order with us, you'll receive:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                <li>An order confirmation email with your order number</li>
                <li>Updates on your order status</li>
                <li>Shipping confirmation with tracking details</li>
              </ul>
              <p className="text-gray-600">
                If you have any questions about your order, please <a href="/contact" className="text-shop-primary hover:underline">contact our support team</a>.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
