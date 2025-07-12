import React from 'react';
import { Home, Building, Brush, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Painting',
      description: 'Transform your indoor spaces with premium quality paints and expert application techniques.',
      features: ['Premium Paint Selection', 'Color Consultation', 'Professional Application', 'Clean Finish'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
    {
      icon: Building,
      title: 'Exterior Painting',
      description: 'Protect and beautify your property with weather-resistant exterior painting solutions.',
      features: ['Weather Protection', 'Durable Finishes', 'Surface Preparation', 'Long-lasting Results'],
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
    },
    {
      icon: Brush,
      title: 'Custom Design',
      description: 'Unique design solutions tailored to your personal style and space requirements.',
      features: ['Personalized Designs', 'Color Schemes', 'Texture Work', 'Creative Solutions'],
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    },
    {
      icon: Palette,
      title: 'Consultation Services',
      description: 'Expert advice on color selection, design patterns, and paint selection for optimal results.',
      features: ['Color Matching', 'Design Planning', 'Material Selection', 'Budget Planning'],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive painting and design solutions 
            that transform your vision into reality with exceptional quality and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;