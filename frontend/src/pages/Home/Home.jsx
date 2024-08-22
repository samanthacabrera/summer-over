import React from 'react';
import Hero from './Hero';
import Guide from './Guide';
import ItemsList from '../src/components/ItemsList'; 

const items = [
  { id: 1, name: 'Vintage Dress', description: 'A beautiful vintage dress in great condition.', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Leather Jacket', description: 'An excellent leather jacket that adds style to any outfit.', image: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div className="p-6">
      <Hero />
      <Guide />
      <ItemsList items={items} />
    </div>
  );
};

export default Home;
