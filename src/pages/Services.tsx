
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Our Printing Services</h1>
          <p className="text-gray-600 mb-8">
            Discover our premium printing services tailored to meet your needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service cards will be displayed here */}
            {["Business Cards", "Flyers & Brochures", "Banners & Signage", 
              "Stationery", "Photo Prints", "Custom Printing"].map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Service Image</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600 mb-4">
                    High-quality {service.toLowerCase()} printed on premium materials.
                  </p>
                  <button className="bg-shop-primary text-white px-4 py-2 rounded hover:bg-shop-secondary transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
