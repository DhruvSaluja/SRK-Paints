import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, Home, Building, Brush, Palette } from 'lucide-react';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServicesManager: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      icon: 'Home',
      title: 'Interior Painting',
      description: 'Transform your indoor spaces with premium quality paints and expert application techniques.',
      features: ['Premium Paint Selection', 'Color Consultation', 'Professional Application', 'Clean Finish'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    },
    {
      id: 2,
      icon: 'Building',
      title: 'Exterior Painting',
      description: 'Protect and beautify your property with weather-resistant exterior painting solutions.',
      features: ['Weather Protection', 'Durable Finishes', 'Surface Preparation', 'Long-lasting Results'],
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
    },
  ]);

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const iconOptions = [
    { value: 'Home', label: 'Home', icon: Home },
    { value: 'Building', label: 'Building', icon: Building },
    { value: 'Brush', label: 'Brush', icon: Brush },
    { value: 'Palette', label: 'Palette', icon: Palette },
  ];

  const handleEdit = (service: Service) => {
    setEditingService({ ...service });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingService({
      id: Date.now(),
      icon: 'Home',
      title: '',
      description: '',
      features: [''],
      image: '',
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!editingService) return;

    if (isAddingNew) {
      setServices([...services, editingService]);
    } else {
      setServices(services.map(service => 
        service.id === editingService.id ? editingService : service
      ));
    }
    
    setEditingService(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  const addFeature = () => {
    if (editingService) {
      setEditingService({
        ...editingService,
        features: [...editingService.features, '']
      });
    }
  };

  const updateFeature = (index: number, value: string) => {
    if (editingService) {
      const newFeatures = [...editingService.features];
      newFeatures[index] = value;
      setEditingService({
        ...editingService,
        features: newFeatures
      });
    }
  };

  const removeFeature = (index: number) => {
    if (editingService) {
      setEditingService({
        ...editingService,
        features: editingService.features.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Services List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Services</h2>
          {services.map((service) => {
            const IconComponent = iconOptions.find(opt => opt.value === service.icon)?.icon || Home;
            return (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        {service.features.length} features
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="text-blue-600 hover:text-blue-800 p-1"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:text-red-800 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Edit Form */}
        {editingService && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAddingNew ? 'Add New Service' : 'Edit Service'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon
                </label>
                <select
                  value={editingService.icon}
                  onChange={(e) => setEditingService({ ...editingService, icon: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {iconOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter service title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter service description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={editingService.image}
                  onChange={(e) => setEditingService({ ...editingService, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Features
                  </label>
                  <button
                    onClick={addFeature}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Feature</span>
                  </button>
                </div>
                <div className="space-y-2">
                  {editingService.features.map((feature, index) => (
                    <div key={index} className="flex space-x-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => updateFeature(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter feature"
                      />
                      <button
                        onClick={() => removeFeature(index)}
                        className="text-red-600 hover:text-red-800 p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
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
                    setEditingService(null);
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

export default ServicesManager;