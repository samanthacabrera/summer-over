import React from 'react';

const Profile = () => {
  // Sample data
  const items = [
    { id: 1, name: 'Red Dress', swappedWith: 'Blue Shirt' },
    { id: 2, name: 'Leather Jacket', swappedWith: null },
    { id: 3, name: 'Summer Hat', swappedWith: 'Scarf' },
    { id: 4, name: 'Denim Jeans', swappedWith: null },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Page</h1>
      <p className="mb-6">Manage your items and view your swap history.</p>
      
      <div className="hidden md:grid grid-cols-2 gap-6 mb-4">
        <h2 className="text-lg font-semibold">My Item</h2>
        <h2 className="text-lg font-semibold text-center">Swapped Item</h2>
      </div>
      
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <button className={`mt-2 px-4 py-2 text-white rounded ${item.swappedWith ? 'bg-green-500' : 'bg-red-500'}`}>
                {item.swappedWith ? 'Swapped' : 'Unswapped'}
              </button>
            </div>
            
            <div className="w-full md:w-1/2">
              {item.swappedWith ? (
                <div className="text-center">
                  <span className="block mt-2 text-gray-700">{item.swappedWith}</span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="block mt-2 text-gray-400">n/a</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
