import React, { useState } from 'react';
import { Save, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface SiteSettings {
  companyName: string;
  tagline: string;
  phone: string[];
  email: string[];
  address: string;
  workingHours: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

const SettingsManager: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>({
    companyName: 'Shree Radha Krishna',
    tagline: 'Paint & Design Studio',
    phone: ['+91 98765 43210', '+91 87654 32109'],
    email: ['info@shreeradhakrishna.com', 'support@shreeradhakrishna.com'],
    address: 'Shop No. 123, Main Market\nCity Center, State - 123456',
    workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 5:00 PM',
    socialMedia: {
      facebook: 'https://facebook.com/shreeradhakrishna',
      instagram: 'https://instagram.com/shreeradhakrishna',
      twitter: 'https://twitter.com/shreeradhakrishna',
    },
    seo: {
      title: 'Shree Radha Krishna - Paint & Design Studio',
      description: 'Premium interior and exterior painting services with expert consultation and beautiful design catalogs.',
      keywords: 'paint, interior design, exterior painting, color consultation, home improvement, professional painters',
    },
  });

  const handleSave = () => {
    // Save settings logic here
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  const updatePhone = (index: number, value: string) => {
    const newPhones = [...settings.phone];
    newPhones[index] = value;
    setSettings({ ...settings, phone: newPhones });
  };

  const updateEmail = (index: number, value: string) => {
    const newEmails = [...settings.email];
    newEmails[index] = value;
    setSettings({ ...settings, email: newEmails });
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Save className="h-5 w-5" />
          <span>Save All Settings</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Globe className="h-5 w-5" />
            <span>Company Information</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Working Hours
              </label>
              <textarea
                value={settings.workingHours}
                onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Contact Information</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Numbers
              </label>
              {settings.phone.map((phone, index) => (
                <input
                  key={index}
                  type="text"
                  value={phone}
                  onChange={(e) => updatePhone(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                  placeholder={`Phone ${index + 1}`}
                />
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Addresses
              </label>
              {settings.email.map((email, index) => (
                <input
                  key={index}
                  type="email"
                  value={email}
                  onChange={(e) => updateEmail(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
                  placeholder={`Email ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Social Media Links
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Facebook
              </label>
              <input
                type="url"
                value={settings.socialMedia.facebook}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, facebook: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://facebook.com/yourpage"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instagram
              </label>
              <input
                type="url"
                value={settings.socialMedia.instagram}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, instagram: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://instagram.com/yourpage"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Twitter
              </label>
              <input
                type="url"
                value={settings.socialMedia.twitter}
                onChange={(e) => setSettings({
                  ...settings,
                  socialMedia: { ...settings.socialMedia, twitter: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://twitter.com/yourpage"
              />
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            SEO Settings
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Page Title
              </label>
              <input
                type="text"
                value={settings.seo.title}
                onChange={(e) => setSettings({
                  ...settings,
                  seo: { ...settings.seo, title: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                value={settings.seo.description}
                onChange={(e) => setSettings({
                  ...settings,
                  seo: { ...settings.seo, description: e.target.value }
                })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords
              </label>
              <input
                type="text"
                value={settings.seo.keywords}
                onChange={(e) => setSettings({
                  ...settings,
                  seo: { ...settings.seo, keywords: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsManager;