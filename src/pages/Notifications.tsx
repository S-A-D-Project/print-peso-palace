
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Bell, CheckCheck, Package, ShoppingBag, Printer, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Sample notification data
  const notifications = [
    {
      id: 1,
      type: "order",
      title: "Order #12345 has been confirmed",
      description: "Your order for business cards has been confirmed and is now being processed.",
      date: "2 hours ago",
      isRead: false,
      icon: ShoppingBag
    },
    {
      id: 2,
      type: "shipping",
      title: "Your package is on the way",
      description: "Order #12345 has been shipped and is expected to arrive on April 6, 2025.",
      date: "Yesterday",
      isRead: false,
      icon: Package
    },
    {
      id: 3,
      type: "promotion",
      title: "15% OFF on Flyers & Brochures",
      description: "Limited time offer! Use code FLYER15 at checkout.",
      date: "April 1, 2025",
      isRead: true,
      icon: Bell
    },
    {
      id: 4,
      type: "order",
      title: "Order #12290 has been delivered",
      description: "Your order for photo prints has been delivered to the specified address.",
      date: "March 29, 2025",
      isRead: true,
      icon: CheckCheck
    },
    {
      id: 5,
      type: "printing",
      title: "Your design has been approved",
      description: "The design for your business cards has been approved and is now ready for printing.",
      date: "March 28, 2025",
      isRead: true,
      icon: Printer
    },
    {
      id: 6,
      type: "order",
      title: "Order #12233 is ready for pickup",
      description: "Your order is ready for pickup at our Makati branch.",
      date: "March 27, 2025",
      isRead: true,
      icon: ShoppingBag
    }
  ];
  
  // Filter notifications based on active tab
  const getFilteredNotifications = () => {
    if (activeTab === "all") return notifications;
    return notifications.filter(notification => notification.type === activeTab);
  };
  
  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.isRead).length;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-shop-primary text-white px-3 py-1 rounded-full text-sm">
                {unreadCount} unread
              </span>
            )}
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-4 grid grid-cols-5 gap-2">
              <TabsTrigger value="all" className="flex items-center justify-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">All</span>
              </TabsTrigger>
              <TabsTrigger value="order" className="flex items-center justify-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex items-center justify-center gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Shipping</span>
              </TabsTrigger>
              <TabsTrigger value="printing" className="flex items-center justify-center gap-2">
                <Printer className="h-4 w-4" />
                <span className="hidden sm:inline">Printing</span>
              </TabsTrigger>
              <TabsTrigger value="promotion" className="flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Promotions</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-6">
              <div className="space-y-4">
                {getFilteredNotifications().length > 0 ? (
                  getFilteredNotifications().map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`border rounded-lg p-4 relative ${
                        notification.isRead ? 'bg-background' : 'bg-blue-50 border-shop-primary/30'
                      }`}
                    >
                      {!notification.isRead && (
                        <div className="absolute top-4 right-4 w-3 h-3 bg-shop-primary rounded-full"></div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${
                          notification.isRead ? 'bg-gray-100' : 'bg-shop-primary/10'
                        }`}>
                          <notification.icon className={`h-5 w-5 ${
                            notification.isRead ? 'text-gray-500' : 'text-shop-primary'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-medium mb-1 ${
                            notification.isRead ? 'text-gray-700' : 'text-shop-primary'
                          }`}>
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{notification.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 text-xs flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {notification.date}
                            </span>
                            {notification.type === "order" && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-xs h-7 px-2 border-gray-300"
                                asChild
                              >
                                <a href="/track-order">Track Order</a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <Bell className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-500 mb-2">No notifications</h3>
                    <p className="text-gray-400">You don't have any {activeTab !== 'all' ? activeTab : ''} notifications yet.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          {getFilteredNotifications().length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-gray-300">
                Mark all as read
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
