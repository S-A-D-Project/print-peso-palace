
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">About PrintPeso</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                PrintPeso is the Philippines' leading online printing service, offering high-quality 
                printing solutions for businesses and individuals at affordable prices.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2018, we've grown from a small local print shop to a nationwide service, 
                delivering premium printing products to customers across all regions of the Philippines.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to make professional printing accessible to everyone, combining 
                cutting-edge technology with exceptional customer service.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center min-h-[300px]">
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {title: "Quality", desc: "We never compromise on the quality of our products and services."},
              {title: "Affordability", desc: "We believe premium printing should be accessible to all budgets."},
              {title: "Innovation", desc: "We continuously improve our technology and processes."}
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
