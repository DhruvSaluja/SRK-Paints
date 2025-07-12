import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '1000+', label: 'Happy Customers' },
    { icon: Clock, number: '10+', label: 'Years Experience' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Master Painter',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      experience: '15+ years',
    },
    {
      name: 'Priya Sharma',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      experience: '12+ years',
    },
    {
      name: 'Amit Patel',
      role: 'Color Consultant',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      experience: '8+ years',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Shree Radha Krishna
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been transforming spaces with premium paint solutions 
            and innovative design concepts. Our commitment to quality and customer satisfaction 
            has made us a trusted name in the industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-gradient-to-r from-blue-800 to-orange-500 p-4 rounded-2xl w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <stat.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to bring beautiful, lasting color to every space, 
                Shree Radha Krishna has grown from a small local business to a trusted 
                name in paint and design solutions.
              </p>
              <p>
                We believe that the right colors and designs can transform not just spaces, 
                but lives. Our team of expert painters and designers work closely with each 
                client to understand their vision and bring it to life with precision and care.
              </p>
              <p>
                From residential homes to commercial spaces, we've completed thousands of 
                projects, each one a testament to our commitment to quality, reliability, 
                and customer satisfaction.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-semibold">Premium Quality Paints</span>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-lg">
                <span className="text-orange-800 font-semibold">Expert Craftsmanship</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-green-800 font-semibold">Eco-Friendly Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/assets/images/LithosVenetianPeacock.png"
              alt="Our Workshop"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Expert Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-blue-800/20 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-orange-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.experience} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;