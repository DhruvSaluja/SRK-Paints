import React, { useState } from 'react';
import { Settings, Users, Image, Briefcase, BookOpen, Home, Save, Plus, Edit, Trash2, Eye, EyeOff, LogOut } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';
import HeroManager from './HeroManager';
import ServicesManager from './ServicesManager';
import CatalogManager from './CatalogManager';
import TeamManager from './TeamManager';
import SettingsManager from './SettingsManager';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const { logout } = useAuth();

  const tabs = [
    { id: 'hero', name: 'Hero Slides', icon: Image },
    { id: 'services', name: 'Services', icon: Briefcase },
    { id: 'catalog', name: 'Catalog', icon: BookOpen },
    { id: 'team', name: 'Team', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'hero':
        return <HeroManager />;
      case 'services':
        return <ServicesManager />;
      case 'catalog':
        return <CatalogManager />;
      case 'team':
        return <TeamManager />;
      case 'settings':
        return <SettingsManager />;
      default:
        return <HeroManager />;
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="bg-white shadow-2xl w-full flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 text-white p-6">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>
          
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors mb-4">
              <Save className="h-5 w-5" />
              <span>Save All Changes</span>
            </button>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;