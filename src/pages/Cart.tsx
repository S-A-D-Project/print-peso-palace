
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  // In a real app, this would come from a state management solution
  const cartItems = [
    {
      id: 1,
      name: "Business Cards",
      description: "Premium 350gsm, Matte Finish",
      quantity: 2,
      price: 550,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Flyers - A5",
      description: "Full Color, Double-sided, 100pcs",
      quantity: 1,
      price: 1200,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      name: "Banner - 3x6ft",
      description: "Vinyl, Full Color with Grommets",
      quantity: 1,
      price: 1800,
      image: "https://via.placeholder.com/100"
    }
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 150;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                          <p className="font-medium">₱{item.price.toLocaleString()}</p>
                        </div>
                        <div className="flex flex-col sm:items-end justify-between gap-2">
                          <div className="flex items-center border rounded">
                            <button className="p-2">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4">{item.quantity}</span>
                            <button className="p-2">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="font-semibold">₱{(item.price * item.quantity).toLocaleString()}</p>
                          <button className="text-red-500 flex items-center gap-1 text-sm">
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>₱{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>₱{shipping.toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₱{total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-shop-primary hover:bg-shop-secondary text-white mb-3">
                    Proceed to Checkout
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/services">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6 flex justify-center">
                <ShoppingBag className="h-16 w-16 text-gray-300" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Button className="bg-shop-primary hover:bg-shop-secondary" asChild>
                <a href="/services">Start Shopping</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
