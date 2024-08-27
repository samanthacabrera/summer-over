import React from 'react';

const statsData = {
  itemsSwapped: 58,
  sustainabilityImpact: 'Reduced 200kg of CO2',
  newConnections: 15,
  itemsDonated: 12,
  environmentalImpact: 'Saved 150,000 liters of water',
  groupsJoined: 8,
};

const StatCard = ({ title, value }) => (
  <div className="bg-teal-700 bg-opacity-50 rounded-lg border-4 p-4 break-inside mb-4 text-white">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{value}</p>
  </div>
);

const Stats = () => {
  return (
    <div className="container mx-auto p-6">
          <h2 className="subheading">Stats</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        <StatCard title="Items Swapped" value={statsData.itemsSwapped} />
        <StatCard title="Sustainability Impact" value={statsData.sustainabilityImpact} />
        <StatCard title="Items Donated" value={statsData.itemsDonated} />
        <StatCard title="Environmental Impact" value={statsData.environmentalImpact} />
        <StatCard title="New Connections Made" value={statsData.newConnections} />
        <StatCard title="Groups Joined" value={statsData.groupsJoined} />
      </div>
    </div>
  );
};

export default Stats;
