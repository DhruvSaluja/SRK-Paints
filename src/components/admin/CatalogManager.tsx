import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, Filter } from 'lucide-react';

interface CatalogItem {
  id: number;
  title: string;
  category: string;
  image: string;
  pages: number;
  description: string;
  colors: string[];
}

const CatalogManager: React.FC = () => {
  const [catalogs, setCatalogs] = useState<CatalogItem[]>([
    {
      id: 1,
      title: 'Modern Living Rooms',
      category: 'interior',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      pages: 24,
      description: 'Contemporary interior designs for living spaces',
      colors: ['#2563eb', '#f97316', '#64748b'],
    },
    {
      id: 2,
      title: 'Exterior House Designs',
      category: 'exterior',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
      pages: 32,
      description: 'Beautiful exterior color combinations and designs',
      colors: ['#16a34a', '#dc2626', '#ca8a04'],
    },
  ]);

  const [editingCatalog, setEditingCatalog] = useState<CatalogItem | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const categories = [
    { value: 'interior', label: 'Interior' },
    { value: 'exterior', label: 'Exterior' },
    { value: 'modern', label: 'Modern' },
    { value: 'traditional', label: 'Traditional' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const handleEdit = (catalog: CatalogItem) => {
    setEditingCatalog({ ...catalog });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingCatalog({
      id: Date.now(),
      title: '',
      category: 'interior',
      image: '',
      pages: 0,
      description: '',
      colors: ['#000000'],
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!editingCatalog) return;

    if (isAddingNew) {
      setCatalogs([...catalogs, editingCatalog]);
    } else {
      setCatalogs(catalogs.map(catalog => 
        catalog.id === editingCatalog.id ? editingCatalog : catalog
      ));
    }
    
    setEditingCatalog(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    setCatalogs(catalogs.filter(catalog => catalog.id !== id));
  };

  const addColor = () => {
    if (editingCatalog) {
      setEditingCatalog({
        ...editingCatalog,
        colors: [...editingCatalog.colors, '#000000']
      });
    }
  };

  const updateColor = (index: number, value: string) => {
    if (editingCatalog) {
      const newColors = [...editingCatalog.colors];
      newColors[index] = value;
      setEditingCatalog({
        ...editingCatalog,
        colors: newColors
      });
    }
  };

  const removeColor = (index: number) => {
    if (editingCatalog) {
      setEditingCatalog({
        ...editingCatalog,
        colors: editingCatalog.colors.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Catalog Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Catalog</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Catalogs List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Catalogs</h2>
          {catalogs.map((catalog) => (
            <div key={catalog.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <img
                  src={catalog.image}
                  alt={catalog.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{catalog.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {catalog.category}
                    </span>
                    <span className="text-xs text-gray-500">{catalog.pages} pages</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{catalog.description}</p>
                  <div className="flex space-x-1 mt-2">
                    {catalog.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(catalog)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(catalog.id)}
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
        {editingCatalog && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAddingNew ? 'Add New Catalog' : 'Edit Catalog'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={editingCatalog.title}
                  onChange={(e) => setEditingCatalog({ ...editingCatalog, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter catalog title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={editingCatalog.category}
                  onChange={(e) => setEditingCatalog({ ...editingCatalog, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={editingCatalog.image}
                  onChange={(e) => setEditingCatalog({ ...editingCatalog, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Pages
                </label>
                <input
                  type="number"
                  value={editingCatalog.pages}
                  onChange={(e) => setEditingCatalog({ ...editingCatalog, pages: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="24"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={editingCatalog.description}
                  onChange={(e) => setEditingCatalog({ ...editingCatalog, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter catalog description"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Color Palette
                  </label>
                  <button
                    onClick={addColor}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Color</span>
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {editingCatalog.colors.map((color, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={color}
                        onChange={(e) => updateColor(index, e.target.value)}
                        className="w-8 h-8 rounded border border-gray-300"
                      />
                      <input
                        type="text"
                        value={color}
                        onChange={(e) => updateColor(index, e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded"
                      />
                      <button
                        onClick={() => removeColor(index)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Trash2 className="h-3 w-3" />
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
                    setEditingCatalog(null);
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

export default CatalogManager;