import React, { useState } from 'react';
import { Plus, Edit, Trash2, Upload, Save } from 'lucide-react';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const HeroManager: React.FC = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      title: 'Transform Your Space',
      subtitle: 'Premium Interior Design Solutions',
      description: 'Create beautiful living spaces with our expert interior painting and design services.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
      title: 'Exterior Excellence',
      subtitle: 'Weather-Resistant Exterior Painting',
      description: 'Protect and beautify your property with our durable exterior painting solutions.',
    },
  ]);

  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleEdit = (slide: HeroSlide) => {
    setEditingSlide({ ...slide });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingSlide({
      id: Date.now(),
      image: '',
      title: '',
      subtitle: '',
      description: '',
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!editingSlide) return;

    if (isAddingNew) {
      setSlides([...slides, editingSlide]);
    } else {
      setSlides(slides.map(slide => 
        slide.id === editingSlide.id ? editingSlide : slide
      ));
    }
    
    setEditingSlide(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    setSlides(slides.filter(slide => slide.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Hero Slides Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Slide</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slides List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Slides</h2>
          {slides.map((slide) => (
            <div key={slide.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.subtitle}</p>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{slide.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(slide)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(slide.id)}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Form */}
        {editingSlide && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAddingNew ? 'Add New Slide' : 'Edit Slide'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={editingSlide.image}
                    onChange={(e) => setEditingSlide({ ...editingSlide, image: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                  <button className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors">
                    <Upload className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={editingSlide.title}
                  onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter slide title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={editingSlide.subtitle}
                  onChange={(e) => setEditingSlide({ ...editingSlide, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter slide subtitle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={editingSlide.description}
                  onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter slide description"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={() => {
                    setEditingSlide(null);
                    setIsAddingNew(false);
                  }}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroManager;