import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  experience: string;
}

const TeamManager: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Master Painter',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      experience: '15+ years',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      experience: '12+ years',
    },
  ]);

  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleEdit = (member: TeamMember) => {
    setEditingMember({ ...member });
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    setEditingMember({
      id: Date.now(),
      name: '',
      role: '',
      image: '',
      experience: '',
    });
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!editingMember) return;

    if (isAddingNew) {
      setTeam([...team, editingMember]);
    } else {
      setTeam(team.map(member => 
        member.id === editingMember.id ? editingMember : member
      ));
    }
    
    setEditingMember(null);
    setIsAddingNew(false);
  };

  const handleDelete = (id: number) => {
    setTeam(team.filter(member => member.id !== id));
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Team Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Team List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Team</h2>
          {team.map((member) => (
            <div key={member.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start space-x-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-orange-600 font-medium">{member.role}</p>
                  <p className="text-xs text-gray-500">{member.experience} experience</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(member)}
                    className="text-blue-600 hover:text-blue-800 p-1"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
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
        {editingMember && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {isAddingNew ? 'Add Team Member' : 'Edit Team Member'}
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter member name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Master Painter, Interior Designer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  value={editingMember.experience}
                  onChange={(e) => setEditingMember({ ...editingMember, experience: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 15+ years"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  value={editingMember.image}
                  onChange={(e) => setEditingMember({ ...editingMember, image: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/profile.jpg"
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
                    setEditingMember(null);
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

export default TeamManager;