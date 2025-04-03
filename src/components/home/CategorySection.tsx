
import { 
  Newspaper, CreditCard, Image, Bookmark, FileText, Gift, 
  Flag, BookOpen, Sticker, Stamp, Package, PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Business Cards',
    icon: CreditCard,
    description: 'Make a lasting impression',
    path: '/services/business-cards',
    color: 'bg-blue-50'
  },
  {
    id: 2,
    title: 'Flyers & Brochures',
    icon: Newspaper,
    description: 'Spread your message',
    path: '/services/flyers',
    color: 'bg-green-50'
  },
  {
    id: 3,
    title: 'Posters',
    icon: Image,
    description: 'Grab attention anywhere',
    path: '/services/posters',
    color: 'bg-purple-50'
  },
  {
    id: 4,
    title: 'Booklets',
    icon: BookOpen,
    description: 'Tell your complete story',
    path: '/services/booklets',
    color: 'bg-orange-50'
  },
  {
    id: 5,
    title: 'Stationery',
    icon: FileText,
    description: 'Professional correspondence',
    path: '/services/stationery',
    color: 'bg-teal-50'
  },
  {
    id: 6,
    title: 'Marketing Materials',
    icon: Bookmark,
    description: 'Promote your business',
    path: '/services/marketing',
    color: 'bg-pink-50'
  },
  {
    id: 7,
    title: 'Banners',
    icon: Flag,
    description: 'Stand out at events',
    path: '/services/banners',
    color: 'bg-amber-50'
  },
  {
    id: 8,
    title: 'Packaging',
    icon: Package,
    description: 'Custom packaging solutions',
    path: '/services/packaging',
    color: 'bg-cyan-50'
  },
  {
    id: 9,
    title: 'Stickers & Labels',
    icon: Sticker,
    description: 'Stick your brand anywhere',
    path: '/services/stickers',
    color: 'bg-rose-50'
  },
  {
    id: 10,
    title: 'Gifts & Promo Items',
    icon: Gift,
    description: 'Memorable branded gifts',
    path: '/services/gifts',
    color: 'bg-violet-50'
  },
  {
    id: 11,
    title: 'Stamps',
    icon: Stamp,
    description: 'Custom rubber stamps',
    path: '/services/stamps',
    color: 'bg-yellow-50'
  },
  {
    id: 12,
    title: 'Design Services',
    icon: PenTool,
    description: 'Professional design help',
    path: '/services/design',
    color: 'bg-indigo-50'
  }
];

export const CategorySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Browse Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of printing services and find exactly what you need for your business or personal projects.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.path} 
              className={`category-card p-4 rounded-lg ${category.color} text-center flex flex-col items-center hover:shadow-md`}
            >
              <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
                <category.icon className="h-6 w-6 text-shop-primary" />
              </div>
              <h3 className="font-medium text-sm mb-1">{category.title}</h3>
              <p className="text-xs text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
