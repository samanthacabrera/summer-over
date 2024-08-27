import React from 'react';
import Hero from './Hero';
import Guide from './Guide';
import FAQ from './FAQ';
import LocalList from './LocalList';


const Home = () => {

  return (
    <div className="space-y-24">
      <Hero />
      <Guide />
      <LocalList/>
      <FAQ/>
    </div>
  );
};

export default Home;
