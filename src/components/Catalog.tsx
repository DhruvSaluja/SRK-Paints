import React, { useState } from 'react';
import { Download, Eye, Filter } from 'lucide-react';


const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  

  const handleOpenPdf = (pdf:string) => {
  window.open(`${pdf}`, '_blank');
};
const handleDownloadPdf = (pdf:string,title:string) => {
  const link = document.createElement('a');
  link.href = `${pdf}`;
  link.download = `${title}.pdf`;
  link.click();
};

  const categories = [
    { id: 'all', name: 'All Designs' },
    { id: 'interior', name: 'Interior' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'commercial', name: 'Commercial' },
  ];

  const catalogs = [
    {
      id: 1,
      title: 'Modern Living Rooms',
      category: 'interior',
      image: '/assets/images/marmorino.png',
      pdf: '/assets/pdf/royale-play-pdf.pdf',
      pages: 24,
      description: 'Contemporary interior designs for living spaces',
      colors: ['#2563eb', '#f97316', '#64748b'],
    },
    // {
    //   id: 2,
    //   title: 'Exterior House Designs',
    //   category: 'exterior',
    //   image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
    //   pages: 32,
    //   description: 'Beautiful exterior color combinations and designs',
    //   colors: ['#16a34a', '#dc2626', '#ca8a04'],
    // },
    // {
    //   id: 3,
    //   title: 'Bedroom Inspirations',
    //   category: 'interior',
    //   image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    //   pages: 18,
    //   description: 'Relaxing and comfortable bedroom paint schemes',
    //   colors: ['#7c3aed', '#ec4899', '#06b6d4'],
    // },
    // {
    //   id: 4,
    //   title: 'Kitchen Designs',
    //   category: 'interior',
    //   image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    //   pages: 20,
    //   description: 'Modern and functional kitchen color palettes',
    //   colors: ['#ea580c', '#65a30d', '#0891b2'],
    // },
    // {
    //   id: 5,
    //   title: 'Commercial Spaces',
    //   category: 'commercial',
    //   image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    //   pages: 28,
    //   description: 'Professional designs for office and retail spaces',
    //   colors: ['#374151', '#4f46e5', '#059669'],
    // },
    // {
    //   id: 6,
    //   title: 'Traditional Heritage',
    //   category: 'traditional',
    //   image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    //   pages: 22,
    //   description: 'Classic and timeless design patterns',
    //   colors: ['#92400e', '#7c2d12', '#365314'],
    // },
  ];

  const filteredCatalogs = activeCategory === 'all' 
    ? catalogs 
    : catalogs.filter(catalog => catalog.category === activeCategory);

  return (
    <section id="catalog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Design Catalog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Browse our extensive collection of design catalogs digitally. No need to carry heavy 
            physical catalogs - view, download, and share designs instantly with our clients.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-orange-600 bg-orange-50 px-6 py-3 rounded-lg inline-flex">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filter by Category:</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-blue-800 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCatalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <button onClick={()=>handleOpenPdf(catalog.pdf)} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="h-6 w-6" />
                    </button>
                    <button onClick={()=>handleDownloadPdf(catalog.pdf,catalog.title)} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Download className="h-6 w-6" />
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {catalog.pages} Pages
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {catalog.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {catalog.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm text-gray-500">Color Palette:</span>
                  <div className="flex space-x-1">
                    {catalog.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button onClick={()=>handleOpenPdf(catalog.pdf)} className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300">
                    View Catalog
                  </button>
                  <button onClick={()=>handleDownloadPdf(catalog.pdf,catalog.title)} className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom catalog for your specific project?
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Request Custom Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Catalog;